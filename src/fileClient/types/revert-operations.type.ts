import { CreateFileUploadMutation, CreateFileAssociationMutation } from '../../generated/sdk';

type FileResponsePayloadType<T> = T extends 'FileUpload'
  ? CreateFileUploadMutation
  : T extends 'FileAssociation'
  ? CreateFileAssociationMutation[]
  : never;

type FileOperationType = 'FileUpload' | 'FileAssociation';

export type FileOperationRevertType = {
  type: FileOperationType;
  payload: FileResponsePayloadType<FileOperationType>;
};
