import { CreateFileAssociationMutationVariables } from '../../generated/sdk';

export type FileUploadOptionsType = {
  isPublic?: boolean;
  associations?: Pick<
    CreateFileAssociationMutationVariables['data'],
    'entityName' | 'entityReference'
  >[];
};
