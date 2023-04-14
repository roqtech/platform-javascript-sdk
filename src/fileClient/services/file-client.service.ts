import * as FormData from 'form-data';
import fetch, { File } from 'node-fetch';
import { CreateFileAssociationMutation, CreateFileUploadMutation, FileStatusEnum, Sdk } from '../../generated/sdk';
import { FileUploadInfoType } from '../types/file-upload-info.type';
import { FileUploadOptionsType } from '../types/file-upload-options.type';
import { FileOperationRevertType } from '../types/revert-operations.type';
import { FileUploadResponseType } from '../types/file-upload-response.type';

export class FileClientService {
  private gqlSdk: Sdk;
  public fileCategoryContentTypes: Sdk['fileCategoryContentTypes'];
  public fileCategoryContentGroups: Sdk['fileCategoryContentGroups'];
  public fileCategoryContentGroup: Sdk['fileCategoryContentGroup'];
  public fileCategories: Sdk['fileCategories'];
  public fileCategory: Sdk['fileCategory'];
  public files: Sdk['files'];
  public file: Sdk['file'];
  public createFileAssociation: Sdk['createFileAssociation'];
  public createFileUpload: Sdk['createFileUpload'];
  public deleteFileAssociations: Sdk['deleteFileAssociations'];
  public deleteFiles: Sdk['deleteFiles'];
  public makeFilePrivate: Sdk['makeFilePrivate'];
  public makeFilePublic: Sdk['makeFilePublic'];
  public updateFile: Sdk['updateFile'];
  public updateFileStatus: Sdk['updateFileStatus'];
  public uploadFile: (params: {
    fileInfo: FileUploadInfoType;
    options?: FileUploadOptionsType;
  }) => Promise<FileUploadResponseType>;

  constructor(gqlSdk: Sdk) {
    this.gqlSdk = gqlSdk;
    this.fileCategoryContentTypes = this.gqlSdk.fileCategoryContentTypes;
    this.fileCategoryContentGroup = this.gqlSdk.fileCategoryContentGroup;
    this.fileCategoryContentGroups = this.gqlSdk.fileCategoryContentGroups;
    this.fileCategories = this.gqlSdk.fileCategories;
    this.fileCategory = this.gqlSdk.fileCategory;
    this.files = this.gqlSdk.files;
    this.file = this.gqlSdk.file;
    this.createFileAssociation = this.gqlSdk.createFileAssociation;
    this.createFileUpload = this.gqlSdk.createFileUpload;
    this.deleteFileAssociations = this.gqlSdk.deleteFileAssociations;
    this.deleteFiles = this.gqlSdk.deleteFiles;
    this.makeFilePrivate = this.gqlSdk.makeFilePrivate;
    this.makeFilePublic = this.gqlSdk.makeFilePublic;
    this.updateFile = this.gqlSdk.updateFile;
    this.updateFileStatus = this.gqlSdk.updateFileStatus;
    this.uploadFile = this._uploadFile.bind(this);
  }

  private parseHeadersParams(formFields: Record<string, unknown>): {
    maxFileSize: number;
    expiryTime: number;
  } {
    const maxFileSize = formFields.maxSize;
    const expiryTime = Date.now() + Number(formFields.expiryTime);
    return {
      maxFileSize: Number(maxFileSize),
      expiryTime,
    };
  }

  private validateFileUpload(
    file: File,
    fileUploadData: Pick<CreateFileUploadMutation['createFileUpload'], 'contentType' | 'uploadUrl' | 'formFields'>,
  ): void {
    const { uploadUrl, formFields } = fileUploadData;
    if (!uploadUrl) {
      throw new Error('Upload URL is missing');
    }

    const { maxFileSize, expiryTime } = this.parseHeadersParams(formFields);
    if (expiryTime < new Date().getTime()) {
      throw new Error(`Upload URL is expired, Expiry time is ${expiryTime}`);
    }

    if (!maxFileSize) {
      throw new Error('Max file size is missing');
    }

    if (file.size > maxFileSize) {
      throw new Error(
        `File size exceeds max file size, allowed max file size is ${Math.round(maxFileSize / (1024 * 1024))}`,
      );
    }
  }

  private async revertFileOps(operations: FileOperationRevertType[], err = null, maxAttempts = 3): Promise<void> {
    const [...ops] = operations;
    if (!(maxAttempts && ops.length)) {
      if (err) {
        throw err;
      }
      return;
    }
    try {
      while (ops.length > 0) {
        const operation = ops[ops.length - 1];
        switch (operation.type) {
          case 'FileUpload': {
            await this.deleteFiles({
              filter: { id: { equalTo: (operation.payload as CreateFileUploadMutation).createFileUpload.id } },
            });
            ops.pop();
            break;
          }
          case 'FileAssociation': {
            await this.deleteFileAssociations({
              filter: {
                id: {
                  valueIn: (operation.payload as CreateFileAssociationMutation[])?.map(
                    (association) => association.createFileAssociation.id,
                  ),
                },
              },
            });
            ops.pop();
            break;
          }
          default: {
            ops.pop();
          }
        }
      }
    } catch (e) {
      this.revertFileOps(ops, err, maxAttempts - 1);
    }
  }

  public async _uploadFile(params: {
    fileInfo: FileUploadInfoType;
    options?: FileUploadOptionsType;
  }): Promise<FileUploadResponseType> {
    const { fileInfo, options } = params;
    const { file, contentType, fileCategory, name } = fileInfo;
    const operations = new Map<string, FileOperationRevertType>();
    try {
      const createFileUploadResponse = await this.createFileUpload({
        createFileDto: { contentType, fileCategory, name },
      });
      operations.set('FileUpload', {
        type: 'FileUpload',
        payload: createFileUploadResponse,
      });
      await this.validateFileUpload(file as unknown as File, createFileUploadResponse?.createFileUpload);
      const { id, uploadUrl, formFields, isPublic } = createFileUploadResponse.createFileUpload;
      const formData = new FormData();
      Object.keys(formFields).forEach(function (key) {
        formData.append(key, formFields[key]);
      });
      formData.append('file', file);
      const fileUploadToBucketResponse = await fetch(uploadUrl, {
        method: 'POST',
        body: formData,
      });
      if (!fileUploadToBucketResponse.ok) throw new Error('File Upload to bucket failed');
      await this.updateFileStatus({ id, status: FileStatusEnum.Ready });
      if (options?.isPublic !== undefined) {
        if (options.isPublic && !isPublic) {
          await this.makeFilePublic({ id });
        }
        if (!options.isPublic && isPublic) {
          await this.makeFilePrivate({ id });
        }
      }
      if (options?.associations?.length) {
        for (const association of options.associations) {
          const associationResponse = await this.createFileAssociation({
            createFileAssociationDto: { ...association, fileId: id },
          });
          operations.set('FileAssociation', {
            type: 'FileAssociation',
            payload: [
              ...((operations.get('FileAssociation')?.payload as CreateFileAssociationMutation[]) || []),
              associationResponse,
            ],
          });
        }
      }
      const fileUploadResponse = {
        id: createFileUploadResponse.createFileUpload.id,
        name: createFileUploadResponse.createFileUpload.name,
        status: FileStatusEnum.Ready,
        isPublic: options?.isPublic !== undefined ? options.isPublic : isPublic,
      };
      return { fileUploadResponse };
    } catch (err) {
      await this.revertFileOps([...operations.values()], err);
    }
  }
}
