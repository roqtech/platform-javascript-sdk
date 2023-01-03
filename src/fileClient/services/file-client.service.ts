import { Sdk } from '../../generated/sdk';

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
  }
}
