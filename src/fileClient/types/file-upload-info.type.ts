import { MutationCreateFileUploadArgs } from '../../generated/sdk';
import { ReadStream } from 'fs';

export type FileUploadInfoType = {
  file: Buffer | ReadStream;
} & MutationCreateFileUploadArgs['createFileDto'];
