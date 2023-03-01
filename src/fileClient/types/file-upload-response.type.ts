import { FileStatusEnum } from '../../generated/sdk';

export type FileUploadResponseType = {
  fileUploadResponse: {
    id: string;
    name: string;
    status: FileStatusEnum;
    isPublic: boolean;
  };
};
