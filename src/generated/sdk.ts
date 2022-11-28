import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  JsonObject: Record<string, unknown>;
};

export type AcceptUserInviteDto = {
  token: Scalars['String'];
};

export type AllTranslationKeyPageModel = {
  __typename?: 'AllTranslationKeyPageModel';
  data: Array<CustomTranslationKeyModel>;
  totalCount: Scalars['Int'];
};

export type BooleanFilterArgType = {
  equalTo?: InputMaybe<Scalars['Boolean']>;
  notEqualTo?: InputMaybe<Scalars['Boolean']>;
};

export type ChannelPreferenceModel = {
  __typename?: 'ChannelPreferenceModel';
  channel: Scalars['String'];
  enabled: Scalars['Boolean'];
};

export type ChannelPreferencePageModel = {
  __typename?: 'ChannelPreferencePageModel';
  data: Array<ChannelPreferenceModel>;
  totalCount: Scalars['Int'];
};

export type CheckUserInviteTokenModel = {
  __typename?: 'CheckUserInviteTokenModel';
  email?: Maybe<Scalars['String']>;
  isExpired?: Maybe<Scalars['Boolean']>;
  isValid: Scalars['Boolean'];
};

export type ConversationFilterArgType = {
  conversationUserId?: InputMaybe<IdFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
  isGroup?: InputMaybe<BooleanFilterArgType>;
  messageId?: InputMaybe<IdFilterArgType>;
};

export type ConversationModel = {
  __typename?: 'ConversationModel';
  active: Scalars['Boolean'];
  archived: Scalars['Boolean'];
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  isGroup: Scalars['Boolean'];
  ownerId: Scalars['String'];
  participants: ParticipantPageModel;
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type ConversationOrderArgType = {
  order: OrderEnum;
  sort: ConversationOrderSortEnum;
};

export enum ConversationOrderSortEnum {
  Archived = 'archived',
  CreatedAt = 'createdAt',
  IsGroup = 'isGroup',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type ConversationPageModel = {
  __typename?: 'ConversationPageModel';
  data: Array<ConversationModel>;
  totalCount: Scalars['Float'];
};

export type ConversationSearchArgType = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type ConversationUserModel = {
  __typename?: 'ConversationUserModel';
  conversationId: Scalars['String'];
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  updatedAt: Scalars['Date'];
  userId: Scalars['String'];
};

export type CreateUserInviteErrorModel = {
  __typename?: 'CreateUserInviteErrorModel';
  email: Scalars['String'];
  error: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type CreateUserInvitesModel = {
  __typename?: 'CreateUserInvitesModel';
  errors?: Maybe<Array<CreateUserInviteErrorModel>>;
  success?: Maybe<Array<UserInviteModel>>;
};

export type CustomTranslationKeyModel = {
  __typename?: 'CustomTranslationKeyModel';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  key: Scalars['String'];
  translations: TranslationPageModel;
  updatedAt: Scalars['Date'];
};

export type DataImportDto = {
  data: Scalars['JsonObject'];
  flush?: InputMaybe<Scalars['Boolean']>;
};

export type DateFilterArgType = {
  equalTo?: InputMaybe<Scalars['Date']>;
  lessThan?: InputMaybe<Scalars['Date']>;
  lessThanEqual?: InputMaybe<Scalars['Date']>;
  moreThan?: InputMaybe<Scalars['Date']>;
  moreThanEqual?: InputMaybe<Scalars['Date']>;
  notEqualTo?: InputMaybe<Scalars['Date']>;
};

export type DeleteArgType = {
  equalTo?: InputMaybe<Scalars['ID']>;
  valueIn?: InputMaybe<Array<Scalars['ID']>>;
};

export type DeleteFilterArgType = {
  id?: InputMaybe<DeleteArgType>;
};

export type DeleteUserTokenFilterArgType = {
  id?: InputMaybe<DeleteArgType>;
  userId?: InputMaybe<DeleteArgType>;
};

export type DeploymentInfoModel = {
  __typename?: 'DeploymentInfoModel';
  branch: Scalars['String'];
  commit: Scalars['String'];
  timestamp: Scalars['String'];
};

export type EntityNameFilterArgType = {
  equalTo?: InputMaybe<Scalars['String']>;
};

export type EventExampleDataCreateDto = {
  eventData: Scalars['JsonObject'];
  eventType: Scalars['String'];
};

export type EventExampleDataFilterArgType = {
  eventType?: InputMaybe<StringFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
};

export type EventExampleDataModel = {
  __typename?: 'EventExampleDataModel';
  createdAt: Scalars['Date'];
  eventData: Scalars['JsonObject'];
  id: Scalars['ID'];
  updatedAt: Scalars['Date'];
};

export type EventExampleDataOrderArgType = {
  order: Scalars['String'];
  sort: Scalars['String'];
};

export type EventExampleDataPageModel = {
  __typename?: 'EventExampleDataPageModel';
  data: Array<EventExampleDataModel>;
  totalCount: Scalars['Float'];
};

export type EventExampleDataSearchArgType = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type EventExampleDataUpdateDto = {
  eventData: Scalars['JsonObject'];
  eventType: Scalars['String'];
};

export type EventRecordCreateDto = {
  count: Scalars['Float'];
  eventType: Scalars['String'];
};

export type EventRecordFilterArgType = {
  id?: InputMaybe<IdFilterArgType>;
};

export type EventRecordModel = {
  __typename?: 'EventRecordModel';
  count: Scalars['Int'];
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  updatedAt: Scalars['Date'];
};

export type EventRecordOrderArgType = {
  order: Scalars['String'];
  sort: Scalars['String'];
};

export type EventRecordPageModel = {
  __typename?: 'EventRecordPageModel';
  data: Array<EventRecordModel>;
  totalCount: Scalars['Float'];
};

export type EventRecordSearchArgType = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type EventRecordUpdateDto = {
  count: Scalars['Float'];
  eventType: Scalars['String'];
};

export type EventSubscriberCreateDto = {
  api?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<Scalars['String']>;
  consumer: Scalars['String'];
  eventType: Scalars['String'];
  key: Scalars['String'];
  parameters?: InputMaybe<Scalars['JsonObject']>;
};

export type EventSubscriberFilterArgType = {
  api?: InputMaybe<StringFilterArgType>;
  condition?: InputMaybe<StringFilterArgType>;
  consumer?: InputMaybe<StringFilterArgType>;
  eventType?: InputMaybe<StringFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
};

export type EventSubscriberModel = {
  __typename?: 'EventSubscriberModel';
  api?: Maybe<Scalars['String']>;
  condition?: Maybe<Scalars['String']>;
  consumer: Scalars['String'];
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  parameters?: Maybe<Scalars['JsonObject']>;
  updatedAt: Scalars['Date'];
};

export type EventSubscriberOrderArgType = {
  order: OrderEnum;
  sort: EventSubscriberOrderSortEnum;
};

export enum EventSubscriberOrderSortEnum {
  Api = 'api',
  Condition = 'condition',
  Consumer = 'consumer',
  CreatedAt = 'createdAt',
  EventType = 'eventType',
  Id = 'id',
  Parameters = 'parameters',
  UpdatedAt = 'updatedAt'
}

export type EventSubscriberPageModel = {
  __typename?: 'EventSubscriberPageModel';
  data: Array<EventSubscriberModel>;
  totalCount: Scalars['Float'];
};

export type EventSubscriberSearchArgType = {
  key: EventSubscriberSearchKeyEnum;
  value: Scalars['String'];
};

export enum EventSubscriberSearchKeyEnum {
  Consumer = 'consumer',
  EventType = 'eventType'
}

export type EventSubscriberUpdateDto = {
  api?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<Scalars['String']>;
  consumer: Scalars['String'];
  eventType: Scalars['String'];
  parameters?: InputMaybe<Scalars['JsonObject']>;
};

export type EventTypeCreateDto = {
  eventType: Scalars['String'];
};

export type EventTypeFilterArgType = {
  eventSubscriberId?: InputMaybe<IdFilterArgType>;
  eventType?: InputMaybe<StringFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
};

export type EventTypeModel = {
  __typename?: 'EventTypeModel';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type EventTypeOrderArgType = {
  order: Scalars['String'];
  sort: Scalars['String'];
};

export type EventTypePageModel = {
  __typename?: 'EventTypePageModel';
  data: Array<EventTypeModel>;
  totalCount: Scalars['Float'];
};

export type EventTypeSearchArgType = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type EventTypeUpdateDto = {
  eventType: Scalars['String'];
};

export type FileAssociationBulkFilterArgType = {
  fileId?: InputMaybe<IdBulkFilterArgType>;
  id?: InputMaybe<IdBulkFilterArgType>;
};

export type FileAssociationCreateDto = {
  entityIdentifier: Scalars['ID'];
  entityName: Scalars['String'];
  fileId: Scalars['ID'];
};

export type FileAssociationFilterArgType = {
  entityIdentifier?: InputMaybe<StringFilterArgType>;
  entityName?: InputMaybe<StringFilterArgType>;
  fileId?: InputMaybe<IdFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
};

export type FileAssociationModel = {
  __typename?: 'FileAssociationModel';
  createdAt: Scalars['Date'];
  entityIdentifier: Scalars['ID'];
  entityName: Scalars['String'];
  file: FileModel;
  fileId: Scalars['ID'];
  id: Scalars['ID'];
  updatedAt: Scalars['Date'];
};

export type FileAssociationOptionsCreateDto = {
  entityIdentifier: Scalars['ID'];
  entityName: Scalars['String'];
};

export type FileAssociationOrderArgType = {
  order: OrderEnum;
  sort: FileAssociationOrderSortEnum;
};

export enum FileAssociationOrderSortEnum {
  CreatedAt = 'createdAt',
  EntityIdentifier = 'entityIdentifier',
  EntityName = 'entityName',
  UpdatedAt = 'updatedAt'
}

export type FileAssociationPageModel = {
  __typename?: 'FileAssociationPageModel';
  data: Array<FileAssociationModel>;
  totalCount: Scalars['Int'];
};

export type FileAssociationSearchArgType = {
  key: FileAssociationSearchKeyEnum;
  value: Scalars['String'];
};

export enum FileAssociationSearchKeyEnum {
  EntityIdentifier = 'entityIdentifier',
  EntityName = 'entityName'
}

export type FileCategoryContentTypeFilterArgType = {
  fileCategoryId?: InputMaybe<IdFilterArgType>;
  group?: InputMaybe<StringFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
  key?: InputMaybe<StringFilterArgType>;
  name?: InputMaybe<StringFilterArgType>;
};

export enum FileCategoryContentTypeGroupEnum {
  Application = 'application',
  Audio = 'audio',
  Font = 'font',
  Image = 'image',
  Message = 'message',
  Model = 'model',
  Multipart = 'multipart',
  Other = 'other',
  Text = 'text',
  Video = 'video'
}

export type FileCategoryContentTypeModel = {
  __typename?: 'FileCategoryContentTypeModel';
  createdAt: Scalars['Date'];
  fileCategories?: Maybe<FileCategoryPageModel>;
  group: FileCategoryContentTypeGroupEnum;
  id: Scalars['ID'];
  key: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['Date'];
};


export type FileCategoryContentTypeModelFileCategoriesArgs = {
  filter?: InputMaybe<FileCategoryFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<FileCategoryOrderArgType>;
  search?: InputMaybe<FileCategorySearchArgType>;
};

export type FileCategoryContentTypeOrderArgType = {
  order: OrderEnum;
  sort: FileCategoryContentTypeOrderSortEnum;
};

export enum FileCategoryContentTypeOrderSortEnum {
  CreatedAt = 'createdAt',
  Group = 'group',
  Key = 'key',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type FileCategoryContentTypePageModel = {
  __typename?: 'FileCategoryContentTypePageModel';
  data: Array<FileCategoryContentTypeModel>;
  totalCount: Scalars['Int'];
};

export type FileCategoryContentTypeSearchArgType = {
  key: FileCategoryContentTypeSearchKeyEnum;
  value: Scalars['String'];
};

export enum FileCategoryContentTypeSearchKeyEnum {
  Group = 'group',
  Key = 'key',
  Name = 'name'
}

export type FileCategoryCreateDto = {
  fileCategoryContentTypeIds?: InputMaybe<Array<Scalars['ID']>>;
  key: Scalars['String'];
  maxSize?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
};

export type FileCategoryFilterArgType = {
  fileCategoryContentTypeId?: InputMaybe<IdFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
  key?: InputMaybe<StringFilterArgType>;
  maxSize?: InputMaybe<NumberFilterArgType>;
  name?: InputMaybe<StringFilterArgType>;
};

export type FileCategoryModel = {
  __typename?: 'FileCategoryModel';
  createdAt: Scalars['Date'];
  fileCategoryContentTypes?: Maybe<FileCategoryContentTypePageModel>;
  id: Scalars['ID'];
  key: Scalars['String'];
  maxSize?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  updatedAt: Scalars['Date'];
};


export type FileCategoryModelFileCategoryContentTypesArgs = {
  filter?: InputMaybe<FileCategoryContentTypeFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<FileCategoryContentTypeOrderArgType>;
  search?: InputMaybe<FileCategoryContentTypeSearchArgType>;
};

export type FileCategoryOrderArgType = {
  order: OrderEnum;
  sort: FileCategoryOrderSortEnum;
};

export enum FileCategoryOrderSortEnum {
  CreatedAt = 'createdAt',
  Key = 'key',
  MaxSize = 'maxSize',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type FileCategoryPageModel = {
  __typename?: 'FileCategoryPageModel';
  data: Array<FileCategoryModel>;
  totalCount: Scalars['Int'];
};

export type FileCategorySearchArgType = {
  key: FileCategorySearchKeyEnum;
  value: Scalars['String'];
};

export enum FileCategorySearchKeyEnum {
  Key = 'key',
  Name = 'name'
}

export type FileCategoryUpdateDto = {
  fileCategoryContentTypeIds?: InputMaybe<Array<Scalars['ID']>>;
  maxSize?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileCreateDto = {
  contentType: Scalars['String'];
  customMetaData?: InputMaybe<Scalars['JsonObject']>;
  fileAssociationOptions?: InputMaybe<Array<FileAssociationOptionsCreateDto>>;
  fileCategory: Scalars['String'];
  name: Scalars['String'];
};

export type FileFilterArgType = {
  contentType?: InputMaybe<StringFilterArgType>;
  createdAt?: InputMaybe<DateFilterArgType>;
  createdByUserId?: InputMaybe<IdFilterArgType>;
  entityIdentifiers?: InputMaybe<IdFilterArgType>;
  entityName?: InputMaybe<EntityNameFilterArgType>;
  fileCategory?: InputMaybe<StringFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
  isPublic?: InputMaybe<BooleanFilterArgType>;
  name?: InputMaybe<StringFilterArgType>;
  status?: InputMaybe<StatusFilterArgType>;
  userId?: InputMaybe<IdFilterArgType>;
};

export type FileModel = {
  __typename?: 'FileModel';
  contentType: Scalars['String'];
  createdAt: Scalars['Date'];
  createdByUserId: Scalars['ID'];
  customMetaData?: Maybe<Scalars['JsonObject']>;
  fileAssociations?: Maybe<FileAssociationPageModel>;
  fileCategory: FileCategoryModel;
  fileCategoryId: Scalars['ID'];
  id: Scalars['ID'];
  isPublic: Scalars['Boolean'];
  name: Scalars['String'];
  status: FileStatusEnum;
  updatedAt: Scalars['Date'];
  uploadUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};


export type FileModelFileAssociationsArgs = {
  filter?: InputMaybe<FileAssociationFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<FileAssociationOrderArgType>;
  search?: InputMaybe<FileAssociationSearchArgType>;
};

export type FileOrderArgType = {
  order: OrderEnum;
  sort: FileOrderSortEnum;
};

export enum FileOrderSortEnum {
  ContentType = 'contentType',
  CreatedAt = 'createdAt',
  IsPublic = 'isPublic',
  Name = 'name',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type FilePageModel = {
  __typename?: 'FilePageModel';
  data: Array<FileModel>;
  totalCount: Scalars['Int'];
};

export type FileSearchArgType = {
  key: FileSearchKeyEnum;
  value: Scalars['String'];
};

export enum FileSearchKeyEnum {
  ContentType = 'contentType',
  Name = 'name'
}

export enum FileStatusEnum {
  Cancelled = 'cancelled',
  Error = 'error',
  Processing = 'processing',
  Ready = 'ready',
  UploadPending = 'upload_pending'
}

export type FileUpdateDto = {
  customMetaData?: InputMaybe<Scalars['JsonObject']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IdBulkFilterArgType = {
  equalTo?: InputMaybe<Scalars['ID']>;
  valueIn?: InputMaybe<Array<Scalars['ID']>>;
};

export type IdFilterArgType = {
  equalTo?: InputMaybe<Scalars['ID']>;
  notEqualTo?: InputMaybe<Scalars['ID']>;
  valueIn?: InputMaybe<Array<Scalars['ID']>>;
  valueNotIn?: InputMaybe<Array<Scalars['ID']>>;
};

export type IntegrationCredentialsDto = {
  accountSid?: InputMaybe<Scalars['String']>;
  apiKey?: InputMaybe<Scalars['String']>;
  applicationId?: InputMaybe<Scalars['String']>;
  clientId?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  host?: InputMaybe<Scalars['String']>;
  messageProfileId?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  port?: InputMaybe<Scalars['String']>;
  projectName?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  secretKey?: InputMaybe<Scalars['String']>;
  secure?: InputMaybe<Scalars['Boolean']>;
  senderName?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
};

export type IntegrationCredentialsModel = {
  __typename?: 'IntegrationCredentialsModel';
  accountSid?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  applicationId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  messageProfileId?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  projectName?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  secretKey?: Maybe<Scalars['String']>;
  secure?: Maybe<Scalars['Boolean']>;
  senderName?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
};

export type IntegrationDto = {
  active: Scalars['Boolean'];
  channel: Scalars['String'];
  check?: InputMaybe<Scalars['Boolean']>;
  credentials: IntegrationCredentialsDto;
  providerId: Scalars['String'];
};

export type IntegrationModel = {
  __typename?: 'IntegrationModel';
  active: Scalars['Boolean'];
  channel: Scalars['String'];
  createdAt: Scalars['Date'];
  credentials: IntegrationCredentialsModel;
  id: Scalars['ID'];
  providerId: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type IntegrationPageModel = {
  __typename?: 'IntegrationPageModel';
  data: Array<IntegrationModel>;
  totalCount: Scalars['Int'];
};

export type MailTypeCreateDto = {
  description?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
};

export type MailTypeFilterArgType = {
  description?: InputMaybe<StringFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
  key?: InputMaybe<StringFilterArgType>;
  mailTypeLocalizedId?: InputMaybe<IdFilterArgType>;
};

export type MailTypeLocalizedCreateDto = {
  locale: Scalars['String'];
  mailTypeId: Scalars['ID'];
  subject: Scalars['String'];
  template: Scalars['String'];
};

export type MailTypeLocalizedFilterArgType = {
  id?: InputMaybe<IdFilterArgType>;
  locale?: InputMaybe<StringFilterArgType>;
  mailTypeId?: InputMaybe<IdFilterArgType>;
  subject?: InputMaybe<StringFilterArgType>;
};

export type MailTypeLocalizedModel = {
  __typename?: 'MailTypeLocalizedModel';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  locale: Scalars['String'];
  mailType: MailTypeModel;
  mailTypeId: Scalars['ID'];
  subject: Scalars['String'];
  template: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type MailTypeLocalizedOrderArgType = {
  order: OrderEnum;
  sort: MailTypeLocalizedOrderSortEnum;
};

export enum MailTypeLocalizedOrderSortEnum {
  CreatedAt = 'createdAt',
  Locale = 'locale',
  Subject = 'subject',
  Template = 'template',
  UpdatedAt = 'updatedAt'
}

export type MailTypeLocalizedPageModel = {
  __typename?: 'MailTypeLocalizedPageModel';
  data: Array<MailTypeLocalizedModel>;
  totalCount: Scalars['Int'];
};

export type MailTypeLocalizedSearchArgType = {
  key: MailTypeLocalizedSearchKeyEnum;
  value: Scalars['String'];
};

export enum MailTypeLocalizedSearchKeyEnum {
  Locale = 'locale',
  Subject = 'subject',
  Template = 'template'
}

export type MailTypeLocalizedUpdateDto = {
  locale?: InputMaybe<Scalars['String']>;
  mailTypeId?: InputMaybe<Scalars['ID']>;
  subject?: InputMaybe<Scalars['String']>;
  template?: InputMaybe<Scalars['String']>;
};

export type MailTypeModel = {
  __typename?: 'MailTypeModel';
  createdAt: Scalars['Date'];
  description: Scalars['String'];
  id: Scalars['ID'];
  key: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type MailTypeOrderArgType = {
  order: OrderEnum;
  sort: MailTypeOrderSortEnum;
};

export enum MailTypeOrderSortEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Key = 'key',
  UpdatedAt = 'updatedAt'
}

export type MailTypePageModel = {
  __typename?: 'MailTypePageModel';
  data: Array<MailTypeModel>;
  totalCount: Scalars['Int'];
};

export type MailTypeSearchArgType = {
  key: MailTypeSearchKeyEnum;
  value: Scalars['String'];
};

export enum MailTypeSearchKeyEnum {
  Description = 'description',
  Key = 'key'
}

export type MailTypeUpdateDto = {
  description?: InputMaybe<Scalars['String']>;
};

export type MarkMessageDto = {
  read: Scalars['Boolean'];
  seen: Scalars['Boolean'];
};

export type MessageModel = {
  __typename?: 'MessageModel';
  body: Scalars['String'];
  bodyUpdatedAt: Scalars['Date'];
  conversation: ConversationModel;
  conversationId: Scalars['String'];
  conversationUser: ConversationUserModel;
  conversationUserId: Scalars['String'];
  createdAt: Scalars['Date'];
  deletedAt: Scalars['Date'];
  id: Scalars['ID'];
  messageStatus?: Maybe<MessageStatusModel>;
  messageStatusId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
};

export type MessageStatusModel = {
  __typename?: 'MessageStatusModel';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  message: MessageModel;
  messageId: Scalars['String'];
  notified?: Maybe<Scalars['Boolean']>;
  read: Scalars['Boolean'];
  updatedAt: Scalars['Date'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptUserInvite: UserInviteModel;
  addUser: UserModel;
  cancelUserInvite: UserInviteModel;
  createFileAssociation: FileAssociationModel;
  createFileUploadUrl: FileModel;
  createPermission: PermissionModel;
  createRole: RoleModel;
  createUserGroup: UserGroupModel;
  /** Create Single UserInvite */
  createUserInvite: UserInviteModel;
  /** Create multiple UserInvites */
  createUserInvites: CreateUserInvitesModel;
  createUserProvider: UserProviderModel;
  createUserRefreshToken: UserTokenModel;
  createUserResetPasswordToken: UserTokenModel;
  createUserToken: UserTokenModel;
  createUserValidateEmailToken: UserTokenModel;
  deleteConversation: Array<Scalars['ID']>;
  deleteConversationUser: Array<Scalars['ID']>;
  deleteFileAssociation: Scalars['ID'];
  deleteFileAssociations: Array<Scalars['String']>;
  deleteFiles: Array<Scalars['String']>;
  deleteMessage: Array<Scalars['ID']>;
  deleteMessageStatus: Array<Scalars['ID']>;
  deletePermissions: Array<Scalars['ID']>;
  deleteRoles: Array<Scalars['ID']>;
  deleteUserTokens: Array<Scalars['ID']>;
  makeFilePrivate: FileModel;
  makeFilePublic: FileModel;
  markMessageSeen: Array<NotificationModel>;
  notify: NotificationCreateModel;
  relateRolesToUser: Scalars['Boolean'];
  relateRolesToUserGroup: Scalars['Boolean'];
  relateUserGroupsToRole: Scalars['Boolean'];
  relateUserGroupsToUser: Scalars['Boolean'];
  relateUsersToRole: Scalars['Boolean'];
  relateUsersToUserGroup: Scalars['Boolean'];
  resendUserInvite: UserInviteModel;
  rotateRefreshToken: UserTokenModel;
  sendMail: NotificationCreateModel;
  /** Create UserInvite and send email */
  sendUserInvites: CreateUserInvitesModel;
  syncEventSubscribers: Scalars['Boolean'];
  unrelateRolesFromUser: Scalars['Boolean'];
  unrelateRolesFromUserGroup: Scalars['Boolean'];
  unrelateUserGroupsFromRole: Scalars['Boolean'];
  unrelateUserGroupsFromUser: Scalars['Boolean'];
  unrelateUsersFromRole: Scalars['Boolean'];
  unrelateUsersFromUserGroup: Scalars['Boolean'];
  updateFile: FileModel;
  updateFileStatus: FileModel;
  updateNotificationPreference: NotificationPreferenceModel;
  updatePermission: PermissionModel;
  updateRole: RoleModel;
  updateUser: UserModel;
  updateUserGroup: UserGroupModel;
  updateUserGroupRoles: Array<Scalars['ID']>;
  updateUserInvite: UserInviteModel;
  updateUserRoles: Array<Scalars['ID']>;
  verifyUserRefreshToken: UserTokenModel;
};


export type MutationAcceptUserInviteArgs = {
  acceptUserInvite: AcceptUserInviteDto;
};


export type MutationAddUserArgs = {
  user: UserCreateDto;
};


export type MutationCancelUserInviteArgs = {
  id: Scalars['ID'];
};


export type MutationCreateFileAssociationArgs = {
  createFileAssociationDto: FileAssociationCreateDto;
};


export type MutationCreateFileUploadUrlArgs = {
  createFileDto: FileCreateDto;
};


export type MutationCreatePermissionArgs = {
  permission: PermissionCreateDto;
};


export type MutationCreateRoleArgs = {
  role: RoleCreateDto;
};


export type MutationCreateUserGroupArgs = {
  userGroup: UserGroupCreateDto;
};


export type MutationCreateUserInviteArgs = {
  userInvite: UserInviteCreateDto;
};


export type MutationCreateUserInvitesArgs = {
  userInvites: UserInvitesCreateDto;
};


export type MutationCreateUserProviderArgs = {
  userProvider: UserProviderCreateDto;
};


export type MutationCreateUserRefreshTokenArgs = {
  userToken: UserRefreshTokenCreateDto;
};


export type MutationCreateUserResetPasswordTokenArgs = {
  userToken: UserResetPasswordTokenCreateDto;
};


export type MutationCreateUserTokenArgs = {
  userToken: UserTokenCreateDto;
};


export type MutationCreateUserValidateEmailTokenArgs = {
  userToken: UserValidateEmailTokenCreateDto;
};


export type MutationDeleteConversationArgs = {
  filter?: InputMaybe<DeleteFilterArgType>;
};


export type MutationDeleteConversationUserArgs = {
  filter?: InputMaybe<DeleteFilterArgType>;
};


export type MutationDeleteFileAssociationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteFileAssociationsArgs = {
  filter: FileAssociationBulkFilterArgType;
};


export type MutationDeleteFilesArgs = {
  filter?: InputMaybe<DeleteFilterArgType>;
};


export type MutationDeleteMessageArgs = {
  filter?: InputMaybe<DeleteFilterArgType>;
};


export type MutationDeleteMessageStatusArgs = {
  filter?: InputMaybe<DeleteFilterArgType>;
};


export type MutationDeletePermissionsArgs = {
  filter?: InputMaybe<DeleteFilterArgType>;
};


export type MutationDeleteRolesArgs = {
  filter?: InputMaybe<DeleteFilterArgType>;
};


export type MutationDeleteUserTokensArgs = {
  filter?: InputMaybe<DeleteUserTokenFilterArgType>;
};


export type MutationMakeFilePrivateArgs = {
  fileId: Scalars['ID'];
};


export type MutationMakeFilePublicArgs = {
  fileId: Scalars['ID'];
};


export type MutationMarkMessageSeenArgs = {
  mark: MarkMessageDto;
  messageIds: Array<Scalars['String']>;
};


export type MutationNotifyArgs = {
  notification: NotificationCreateDto;
};


export type MutationRelateRolesToUserArgs = {
  id: Scalars['ID'];
  relation: UserRoleRelationDto;
};


export type MutationRelateRolesToUserGroupArgs = {
  id: Scalars['ID'];
  relation: UserGroupRoleRelationDto;
};


export type MutationRelateUserGroupsToRoleArgs = {
  id: Scalars['ID'];
  relation: RoleUserGroupRelationDto;
};


export type MutationRelateUserGroupsToUserArgs = {
  id: Scalars['ID'];
  relation: UserUserGroupRelationDto;
};


export type MutationRelateUsersToRoleArgs = {
  id: Scalars['ID'];
  relation: RoleUserRelationDto;
};


export type MutationRelateUsersToUserGroupArgs = {
  id: Scalars['ID'];
  relation: UserGroupUserRelationDto;
};


export type MutationResendUserInviteArgs = {
  id: Scalars['ID'];
};


export type MutationRotateRefreshTokenArgs = {
  userToken: UserRefreshTokenVerifyDto;
};


export type MutationSendMailArgs = {
  notification: NotificationGuestCreateDto;
};


export type MutationSendUserInvitesArgs = {
  userInvites: UserInvitesCreateDto;
};


export type MutationSyncEventSubscribersArgs = {
  eventSubscribers: Array<EventSubscriberCreateDto>;
};


export type MutationUnrelateRolesFromUserArgs = {
  id: Scalars['ID'];
  relation: UserRoleRelationDto;
};


export type MutationUnrelateRolesFromUserGroupArgs = {
  id: Scalars['ID'];
  relation: UserGroupRoleRelationDto;
};


export type MutationUnrelateUserGroupsFromRoleArgs = {
  id: Scalars['ID'];
  relation: RoleUserGroupRelationDto;
};


export type MutationUnrelateUserGroupsFromUserArgs = {
  id: Scalars['ID'];
  relation: UserUserGroupRelationDto;
};


export type MutationUnrelateUsersFromRoleArgs = {
  id: Scalars['ID'];
  relation: RoleUserRelationDto;
};


export type MutationUnrelateUsersFromUserGroupArgs = {
  id: Scalars['ID'];
  relation: UserGroupUserRelationDto;
};


export type MutationUpdateFileArgs = {
  fileId: Scalars['ID'];
  updateFileDto: FileUpdateDto;
};


export type MutationUpdateFileStatusArgs = {
  fileId: Scalars['ID'];
  status: FileStatusEnum;
};


export type MutationUpdateNotificationPreferenceArgs = {
  id: Scalars['String'];
  preference: UpdateNotificationPreferenceDto;
};


export type MutationUpdatePermissionArgs = {
  id: Scalars['ID'];
  permission: PermissionUpdateDto;
};


export type MutationUpdateRoleArgs = {
  id: Scalars['ID'];
  role: RoleUpdateDto;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  user: UserUpdateDto;
};


export type MutationUpdateUserGroupArgs = {
  id: Scalars['ID'];
  userGroup: UserGroupUpdateDto;
};


export type MutationUpdateUserGroupRolesArgs = {
  id: Scalars['ID'];
  relation: UserGroupRoleRelationDto;
};


export type MutationUpdateUserInviteArgs = {
  id: Scalars['ID'];
  userInvite: UserInviteUpdateDto;
};


export type MutationUpdateUserRolesArgs = {
  id: Scalars['ID'];
  relation: UserRoleRelationDto;
};


export type MutationVerifyUserRefreshTokenArgs = {
  userToken: UserRefreshTokenVerifyDto;
};

export enum NotificationActionTypeEnum {
  Clicked = 'clicked',
  Primary = 'primary',
  Secondary = 'secondary'
}

export type NotificationActivityJobExecutionDetailsModel = {
  __typename?: 'NotificationActivityJobExecutionDetailsModel';
  detail?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  providerId?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['String']>;
  source?: Maybe<NotificationExecutionDetailsSourceEnum>;
  status: NotificationExecutionDetailsStatusEnum;
};

export type NotificationActivityJobModel = {
  __typename?: 'NotificationActivityJobModel';
  digest?: Maybe<Scalars['JsonObject']>;
  executionDetails?: Maybe<Array<NotificationActivityJobExecutionDetailsModel>>;
  payload?: Maybe<Scalars['JsonObject']>;
  providerId?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  step?: Maybe<NotificationTemplateStepModel>;
  type?: Maybe<Scalars['String']>;
};

export type NotificationActivityModel = {
  __typename?: 'NotificationActivityModel';
  channels: Array<NotificationChannelEnum>;
  createdAt: Scalars['Date'];
  id: Scalars['String'];
  jobs: Array<NotificationActivityJobModel>;
  payload?: Maybe<Scalars['JsonObject']>;
  template: NotificationActivityTemplateModel;
  to?: Maybe<NotificationActivityToModel>;
  transactionId?: Maybe<Scalars['String']>;
  user?: Maybe<NotificationActivityUserModel>;
};

export type NotificationActivityPageModel = {
  __typename?: 'NotificationActivityPageModel';
  data: Array<NotificationActivityModel>;
  totalCount: Scalars['Int'];
};

export type NotificationActivityTemplateModel = {
  __typename?: 'NotificationActivityTemplateModel';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  triggers?: Maybe<Array<NotificationTemplateTriggerModel>>;
};

export type NotificationActivityToModel = {
  __typename?: 'NotificationActivityToModel';
  email?: Maybe<Scalars['String']>;
  roqIdentifier?: Maybe<Scalars['String']>;
};

export type NotificationActivityUserModel = {
  __typename?: 'NotificationActivityUserModel';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type NotificationCtaActionButtonModel = {
  __typename?: 'NotificationCTAActionButtonModel';
  content?: Maybe<Scalars['String']>;
  resultContent?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type NotificationCtaActionModel = {
  __typename?: 'NotificationCTAActionModel';
  buttons?: Maybe<NotificationCtaActionButtonModel>;
  result?: Maybe<NotificationCtaActionResultModel>;
  status?: Maybe<NotificationActionTypeEnum>;
};

export type NotificationCtaActionResultModel = {
  __typename?: 'NotificationCTAActionResultModel';
  payload?: Maybe<Scalars['JsonObject']>;
  type?: Maybe<NotificationActionTypeEnum>;
};

export type NotificationCtaDataModel = {
  __typename?: 'NotificationCTADataModel';
  url?: Maybe<Scalars['String']>;
};

export type NotificationCtaModel = {
  __typename?: 'NotificationCTAModel';
  action?: Maybe<NotificationCtaActionModel>;
  data?: Maybe<NotificationCtaDataModel>;
  type?: Maybe<Scalars['String']>;
};

export type NotificationCategoryModel = {
  __typename?: 'NotificationCategoryModel';
  id: Scalars['String'];
  name: Scalars['String'];
};

export enum NotificationChannelEnum {
  Chat = 'chat',
  Email = 'email',
  InApp = 'inApp',
  Push = 'push',
  Sms = 'sms'
}

export type NotificationChannelModel = {
  __typename?: 'NotificationChannelModel';
  providerId: NotificationChannelEnum;
};

export type NotificationCreateDto = {
  data?: InputMaybe<Array<NotificationTemplateVariableDto>>;
  key: Scalars['String'];
  recipients: NotificationRecipientDto;
};

export type NotificationCreateModel = {
  __typename?: 'NotificationCreateModel';
  webNotifications?: Maybe<Scalars['Boolean']>;
};

export enum NotificationExecutionDetailsSourceEnum {
  Credentials = 'CREDENTIALS',
  Internal = 'INTERNAL',
  Payload = 'PAYLOAD',
  Webhook = 'WEBHOOK'
}

export enum NotificationExecutionDetailsStatusEnum {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Queued = 'QUEUED',
  ReadConfirmation = 'READ_CONFIRMATION',
  Success = 'SUCCESS'
}

export type NotificationGuestCreateDto = {
  data?: InputMaybe<Array<NotificationTemplateVariableDto>>;
  emails: Array<Scalars['String']>;
  key: Scalars['String'];
  locale: Scalars['String'];
};

export type NotificationLocalizedTemplateCreateDto = {
  channel: NotificationChannelEnum;
  content: Scalars['String'];
  icon?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
  locale: Scalars['String'];
  subject?: InputMaybe<Scalars['String']>;
  templateId: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type NotificationLocalizedTemplateFilterArgType = {
  channel?: InputMaybe<StringFilterArgType>;
  content?: InputMaybe<StringFilterArgType>;
  icon?: InputMaybe<StringFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
  key?: InputMaybe<StringFilterArgType>;
  locale?: InputMaybe<StringFilterArgType>;
  subject?: InputMaybe<StringFilterArgType>;
  templateId?: InputMaybe<StringFilterArgType>;
  title?: InputMaybe<StringFilterArgType>;
};

export type NotificationLocalizedTemplateModel = {
  __typename?: 'NotificationLocalizedTemplateModel';
  channel?: Maybe<NotificationChannelEnum>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type NotificationLocalizedTemplateOrderArgType = {
  order: OrderEnum;
  sort: NotificationLocalizedTemplateOrderSortEnum;
};

export enum NotificationLocalizedTemplateOrderSortEnum {
  Channel = 'channel',
  Content = 'content',
  CreatedAt = 'createdAt',
  Key = 'key',
  Locale = 'locale',
  UpdatedAt = 'updatedAt'
}

export type NotificationLocalizedTemplatePageModel = {
  __typename?: 'NotificationLocalizedTemplatePageModel';
  data: Array<NotificationLocalizedTemplateModel>;
  totalCount: Scalars['Int'];
};

export type NotificationLocalizedTemplateSearchArgType = {
  key: NotificationLocalizedTemplateSearchKeyEnum;
  value: Scalars['String'];
};

export enum NotificationLocalizedTemplateSearchKeyEnum {
  Key = 'key'
}

export type NotificationLocalizedTemplateUpdateDto = {
  content?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  templateId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type NotificationModel = {
  __typename?: 'NotificationModel';
  channel: NotificationChannelEnum;
  content: Scalars['String'];
  createdAt: Scalars['Date'];
  email?: Maybe<Scalars['String']>;
  errorId?: Maybe<Scalars['String']>;
  errorText?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastSeenDate?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['String']>;
  read: Scalars['Boolean'];
  seen: Scalars['Boolean'];
  status: NotificationStatusEnum;
  templateIdentifier: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type NotificationPageModel = {
  __typename?: 'NotificationPageModel';
  data: Array<NotificationModel>;
  totalCount: Scalars['Int'];
};

export type NotificationPreferenceModel = {
  __typename?: 'NotificationPreferenceModel';
  channelPreferences: ChannelPreferencePageModel;
  enabled: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
};

export type NotificationRecipientDto = {
  allUsers?: InputMaybe<Scalars['Boolean']>;
  excludedUserReferences?: InputMaybe<Array<Scalars['String']>>;
  userGroups?: InputMaybe<NotificationUserGroupDto>;
  userReferences?: InputMaybe<Array<Scalars['String']>>;
};

export enum NotificationStatusEnum {
  Error = 'error',
  Sent = 'sent',
  Warning = 'warning'
}

export type NotificationTemplateCreateDto = {
  active: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  notificationGroupId: Scalars['ID'];
};

export type NotificationTemplateModel = {
  __typename?: 'NotificationTemplateModel';
  active: Scalars['Boolean'];
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  notificationGroup?: Maybe<NotificationCategoryModel>;
  preferenceSettings?: Maybe<NotificationTemplatePreferenceModel>;
  steps?: Maybe<Array<NotificationTemplateStepModel>>;
  triggers?: Maybe<Array<NotificationTemplateTriggerModel>>;
  updatedAt: Scalars['Date'];
};

export type NotificationTemplatePageModel = {
  __typename?: 'NotificationTemplatePageModel';
  data: Array<NotificationTemplateModel>;
  totalCount: Scalars['Int'];
};

export type NotificationTemplatePreferenceModel = {
  __typename?: 'NotificationTemplatePreferenceModel';
  chat?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['Boolean']>;
  in_app?: Maybe<Scalars['Boolean']>;
  push?: Maybe<Scalars['Boolean']>;
  sms?: Maybe<Scalars['Boolean']>;
};

export type NotificationTemplatePreferenceUpdateDto = {
  chat?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['Boolean']>;
  in_app?: InputMaybe<Scalars['Boolean']>;
  push?: InputMaybe<Scalars['Boolean']>;
  sms?: InputMaybe<Scalars['Boolean']>;
};

export type NotificationTemplateStepModel = {
  __typename?: 'NotificationTemplateStepModel';
  active?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  template?: Maybe<NotificationTemplateStepTemplateModel>;
};

export type NotificationTemplateStepTemplateModel = {
  __typename?: 'NotificationTemplateStepTemplateModel';
  active?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  subject?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variables?: Maybe<Array<Scalars['JsonObject']>>;
};

export type NotificationTemplateStepUpdateDto = {
  active?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type NotificationTemplateTriggerModel = {
  __typename?: 'NotificationTemplateTriggerModel';
  identifier: Scalars['String'];
  subscriberVariables: Array<NotificationTriggerVariableModel>;
  type: Scalars['String'];
  variables: Array<NotificationTriggerVariableModel>;
};

export type NotificationTemplateUpdateDto = {
  active?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  notificationGroupId?: InputMaybe<Scalars['ID']>;
  preferenceSettings?: InputMaybe<NotificationTemplatePreferenceUpdateDto>;
  steps?: InputMaybe<Array<NotificationTemplateStepUpdateDto>>;
};

export type NotificationTemplateVariableDto = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type NotificationTriggerVariableModel = {
  __typename?: 'NotificationTriggerVariableModel';
  name: Scalars['String'];
};

export type NotificationUserCreateDto = {
  avatar?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  roqIdentifier: Scalars['ID'];
};

export type NotificationUserGroupDto = {
  operator: NotificationUserGroupOperatorEnum;
  userGroupIds?: InputMaybe<Array<Scalars['String']>>;
};

export enum NotificationUserGroupOperatorEnum {
  And = 'AND',
  Or = 'OR'
}

export type NotificationUserModel = {
  __typename?: 'NotificationUserModel';
  avatar?: Maybe<Scalars['String']>;
  channels?: Maybe<Array<NotificationChannelModel>>;
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  roqIdentifier?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type NotificationUserPageModel = {
  __typename?: 'NotificationUserPageModel';
  data: Array<NotificationUserModel>;
  totalCount: Scalars['Int'];
};

export type NumberFilterArgType = {
  equalTo?: InputMaybe<Scalars['Float']>;
  lessThan?: InputMaybe<Scalars['Float']>;
  lessThanEqual?: InputMaybe<Scalars['Float']>;
  moreThan?: InputMaybe<Scalars['Float']>;
  moreThanEqual?: InputMaybe<Scalars['Float']>;
  notEqualTo?: InputMaybe<Scalars['Float']>;
  valueIn?: InputMaybe<Array<Scalars['Float']>>;
  valueNotIn?: InputMaybe<Array<Scalars['Float']>>;
};

export enum OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ParticipantModel = {
  __typename?: 'ParticipantModel';
  active: Scalars['Boolean'];
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  isOwner: Scalars['Boolean'];
  lastName: Scalars['String'];
  locale: Scalars['String'];
  optedInAt: Scalars['Date'];
  phone: Scalars['String'];
  timezone: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type ParticipantPageModel = {
  __typename?: 'ParticipantPageModel';
  data: Array<ParticipantModel>;
  totalCount: Scalars['Float'];
};

export type PermissionCreateDto = {
  key: Scalars['String'];
  resolverMapping: Scalars['String'];
  roleId: Scalars['ID'];
  scope: PermissionScopeEnum;
  userGroupType?: InputMaybe<Scalars['String']>;
};

export type PermissionFilterArgType = {
  id?: InputMaybe<IdFilterArgType>;
  key?: InputMaybe<StringFilterArgType>;
  resolverMapping?: InputMaybe<StringFilterArgType>;
  roleId?: InputMaybe<IdFilterArgType>;
  scope?: InputMaybe<StringFilterArgType>;
  userGroupType?: InputMaybe<StringFilterArgType>;
};

export type PermissionModel = {
  __typename?: 'PermissionModel';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  key: Scalars['String'];
  role: RoleModel;
  roleId: Scalars['ID'];
  scope: PermissionScopeEnum;
  updatedAt: Scalars['Date'];
  userGroupType?: Maybe<Scalars['String']>;
};

export type PermissionOrderArgType = {
  order: OrderEnum;
  sort: PermissionOrderSortEnum;
};

export enum PermissionOrderSortEnum {
  CreatedAt = 'createdAt',
  Key = 'key',
  ResolverMapping = 'resolverMapping',
  Scope = 'scope',
  UpdatedAt = 'updatedAt',
  UserGroupType = 'userGroupType'
}

export type PermissionPageModel = {
  __typename?: 'PermissionPageModel';
  data: Array<PermissionModel>;
  totalCount: Scalars['Int'];
};

export enum PermissionScopeEnum {
  All = 'all',
  Own = 'own',
  UserGroup = 'userGroup'
}

export type PermissionSearchArgType = {
  key: PermissionSearchKeyEnum;
  value: Scalars['String'];
};

export enum PermissionSearchKeyEnum {
  Key = 'key',
  ResolverMapping = 'resolverMapping',
  UserGroupType = 'userGroupType'
}

export type PermissionUpdateDto = {
  resolverMapping?: InputMaybe<Scalars['String']>;
  roleId: Scalars['ID'];
  scope?: InputMaybe<PermissionScopeEnum>;
  userGroupType?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  allTranslationKeys: AllTranslationKeyPageModel;
  checkUserInviteToken: CheckUserInviteTokenModel;
  checkUserToken: CheckUserInviteTokenModel;
  conversations: ConversationPageModel;
  file: FileModel;
  fileCategories: FileCategoryPageModel;
  fileCategory: FileCategoryModel;
  fileCategoryContentType: FileCategoryContentTypeModel;
  fileCategoryContentTypes: FileCategoryContentTypePageModel;
  files: FilePageModel;
  mailType: MailTypeModel;
  notificationCategories: Array<NotificationCategoryModel>;
  notificationPreference: Array<NotificationPreferenceModel>;
  notifications: NotificationPageModel;
  permission: PermissionModel;
  permissions: PermissionPageModel;
  role: RoleModel;
  roles: RolePageModel;
  translation: TranslationModel;
  translationKey: TranslationKeyModel;
  translationKeys: TranslationKeyPageModel;
  translations: TranslationPageModel;
  unseenNotificationsCount: Scalars['Float'];
  user: UserModel;
  userGroup: UserGroupModel;
  userGroups: UserGroupPageModel;
  userInvite: UserInviteModel;
  userInvites: UserInvitePageModel;
  userProvider: UserProviderModel;
  userProviders: UserProviderPageModel;
  userToken: UserTokenModel;
  userTokens: UserTokenPageModel;
  users: UserPageModel;
};


export type QueryCheckUserInviteTokenArgs = {
  token: Scalars['String'];
};


export type QueryCheckUserTokenArgs = {
  token: Scalars['String'];
  type: Scalars['String'];
};


export type QueryConversationsArgs = {
  filter?: InputMaybe<ConversationFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ConversationOrderArgType>;
  search?: InputMaybe<ConversationSearchArgType>;
};


export type QueryFileArgs = {
  fileId: Scalars['ID'];
};


export type QueryFileCategoriesArgs = {
  filter?: InputMaybe<FileCategoryFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<FileCategoryOrderArgType>;
  search?: InputMaybe<FileCategorySearchArgType>;
};


export type QueryFileCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryFileCategoryContentTypeArgs = {
  id: Scalars['ID'];
};


export type QueryFileCategoryContentTypesArgs = {
  filter?: InputMaybe<FileCategoryContentTypeFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<FileCategoryContentTypeOrderArgType>;
  search?: InputMaybe<FileCategoryContentTypeSearchArgType>;
};


export type QueryFilesArgs = {
  filter?: InputMaybe<FileFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<FileOrderArgType>;
  search?: InputMaybe<FileSearchArgType>;
};


export type QueryMailTypeArgs = {
  id: Scalars['ID'];
};


export type QueryNotificationsArgs = {
  page?: InputMaybe<Scalars['Float']>;
  seen?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPermissionArgs = {
  id: Scalars['ID'];
};


export type QueryPermissionsArgs = {
  filter?: InputMaybe<PermissionFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PermissionOrderArgType>;
  search?: InputMaybe<PermissionSearchArgType>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryRolesArgs = {
  filter?: InputMaybe<RoleFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RoleOrderArgType>;
  search?: InputMaybe<RoleSearchArgType>;
};


export type QueryTranslationArgs = {
  id: Scalars['ID'];
};


export type QueryTranslationKeyArgs = {
  id: Scalars['ID'];
};


export type QueryTranslationKeysArgs = {
  filter?: InputMaybe<TranslationKeyFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<TranslationKeyOrderArgType>;
  search?: InputMaybe<TranslationKeySearchArgType>;
  searchTerm?: InputMaybe<Scalars['String']>;
};


export type QueryTranslationsArgs = {
  filter?: InputMaybe<TranslationFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<TranslationOrderArgType>;
  search?: InputMaybe<TranslationSearchArgType>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserGroupArgs = {
  id: Scalars['ID'];
};


export type QueryUserGroupsArgs = {
  filter?: InputMaybe<UserGroupFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserGroupOrderArgType>;
  search?: InputMaybe<UserGroupSearchArgType>;
};


export type QueryUserInviteArgs = {
  id: Scalars['ID'];
};


export type QueryUserInvitesArgs = {
  filter?: InputMaybe<UserInviteFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserInviteOrderArgType>;
  search?: InputMaybe<UserInviteSearchArgType>;
};


export type QueryUserProviderArgs = {
  id: Scalars['ID'];
};


export type QueryUserProvidersArgs = {
  filter?: InputMaybe<UserProviderFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserProviderOrderArgType>;
  search?: InputMaybe<UserProviderSearchArgType>;
};


export type QueryUserTokenArgs = {
  id: Scalars['ID'];
};


export type QueryUserTokensArgs = {
  filter?: InputMaybe<UserTokenFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserTokenOrderArgType>;
  search?: InputMaybe<UserTokenSearchArgType>;
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrderArgType>;
  search?: InputMaybe<UserSearchArgType>;
};

export type ResolverMappingModel = {
  __typename?: 'ResolverMappingModel';
  isCreate: Scalars['Boolean'];
  isDelete: Scalars['Boolean'];
  isRead: Scalars['Boolean'];
  isUpdate: Scalars['Boolean'];
  name: Scalars['String'];
  object: Scalars['String'];
  operation: Scalars['String'];
  resolvers: Array<Scalars['String']>;
  service: Scalars['String'];
};

export type RoleCreateDto = {
  description?: InputMaybe<Scalars['String']>;
  isSystemManaged: Scalars['Boolean'];
  key: Scalars['String'];
  name: Scalars['String'];
  permissionAssignments: Array<RolePermissionAssignDto>;
};

export type RoleFilterArgType = {
  description?: InputMaybe<StringFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
  isSystemManaged?: InputMaybe<BooleanFilterArgType>;
  key?: InputMaybe<StringFilterArgType>;
  name?: InputMaybe<StringFilterArgType>;
  permissionId?: InputMaybe<IdFilterArgType>;
  userGroupId?: InputMaybe<IdFilterArgType>;
  userId?: InputMaybe<IdFilterArgType>;
};

export type RoleModel = {
  __typename?: 'RoleModel';
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isSystemManaged: Scalars['Boolean'];
  key: Scalars['String'];
  name: Scalars['String'];
  permissionAssignments: PermissionPageModel;
  updatedAt: Scalars['Date'];
  userGroups: UserGroupPageModel;
  users: UserPageModel;
};


export type RoleModelPermissionAssignmentsArgs = {
  filter?: InputMaybe<PermissionFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PermissionOrderArgType>;
  search?: InputMaybe<PermissionSearchArgType>;
};


export type RoleModelUserGroupsArgs = {
  filter?: InputMaybe<UserGroupFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserGroupOrderArgType>;
  search?: InputMaybe<UserGroupSearchArgType>;
};


export type RoleModelUsersArgs = {
  filter?: InputMaybe<UserFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrderArgType>;
  search?: InputMaybe<UserSearchArgType>;
};

export type RoleOrderArgType = {
  order: OrderEnum;
  sort: RoleOrderSortEnum;
};

export enum RoleOrderSortEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  IsSystemManaged = 'isSystemManaged',
  Key = 'key',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type RolePageModel = {
  __typename?: 'RolePageModel';
  data: Array<RoleModel>;
  totalCount: Scalars['Int'];
};

export type RolePermissionAssignDto = {
  id?: InputMaybe<Scalars['ID']>;
  key?: InputMaybe<Scalars['String']>;
  resolverMapping?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<PermissionScopeEnum>;
  userGroupType?: InputMaybe<Scalars['String']>;
};

export type RoleSearchArgType = {
  key: RoleSearchKeyEnum;
  value: Scalars['String'];
};

export enum RoleSearchKeyEnum {
  Description = 'description',
  Key = 'key',
  Name = 'name'
}

export type RoleUpdateDto = {
  description?: InputMaybe<Scalars['String']>;
  isSystemManaged?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  permissionAssignments: Array<RolePermissionAssignDto>;
};

export type RoleUserGroupRelationDto = {
  userGroupIds: Array<Scalars['ID']>;
};

export type RoleUserRelationDto = {
  userIds: Array<Scalars['ID']>;
};

export type StatusFilterArgType = {
  equalTo?: InputMaybe<FileStatusEnum>;
  notEqualTo?: InputMaybe<FileStatusEnum>;
  valueIn?: InputMaybe<Array<FileStatusEnum>>;
  valueNotIn?: InputMaybe<Array<FileStatusEnum>>;
};

export type StringFilterArgType = {
  equalTo?: InputMaybe<Scalars['String']>;
  iLike?: InputMaybe<Scalars['String']>;
  like?: InputMaybe<Scalars['String']>;
  notEqualTo?: InputMaybe<Scalars['String']>;
  valueIn?: InputMaybe<Array<Scalars['String']>>;
  valueNotIn?: InputMaybe<Array<Scalars['String']>>;
};

export type TemplateBulkCompileDto = {
  content: Scalars['String'];
  data?: InputMaybe<Scalars['JsonObject']>;
  entities?: InputMaybe<Array<TemplateCompileEntityDto>>;
  metaObjects?: InputMaybe<Array<Scalars['JsonObject']>>;
};

export type TemplateCompileDto = {
  content: Scalars['String'];
  entities: Array<TemplateCompileEntityDto>;
  metaObj?: InputMaybe<Scalars['JsonObject']>;
};

export type TemplateCompileEntityDto = {
  alias?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  uuid: Scalars['String'];
};

export type TenantInitialiseDto = {
  id: Scalars['String'];
};

export type TenantModel = {
  __typename?: 'TenantModel';
  id: Scalars['String'];
};

export type TenantUpdateDto = {
  fromEmail?: InputMaybe<Scalars['String']>;
  roqOneFrontendUrl?: InputMaybe<Scalars['String']>;
  sendGridApiKey?: InputMaybe<Scalars['String']>;
};

export type TranslationCreateDto = {
  locale: Scalars['String'];
  translationKeyId: Scalars['ID'];
  value: Scalars['String'];
};

export type TranslationFilterArgType = {
  id?: InputMaybe<IdFilterArgType>;
  locale?: InputMaybe<StringFilterArgType>;
  translationKeyId?: InputMaybe<IdFilterArgType>;
};

export type TranslationKeyCreateDto = {
  key: Scalars['String'];
  translations?: InputMaybe<Array<TranslationUpsertDto>>;
};

export type TranslationKeyFilterArgType = {
  id?: InputMaybe<IdFilterArgType>;
  key?: InputMaybe<StringFilterArgType>;
  locale?: InputMaybe<StringFilterArgType>;
  translated?: InputMaybe<BooleanFilterArgType>;
};

export type TranslationKeyModel = {
  __typename?: 'TranslationKeyModel';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  key: Scalars['String'];
  translations: TranslationPageModel;
  updatedAt: Scalars['Date'];
};


export type TranslationKeyModelTranslationsArgs = {
  filter?: InputMaybe<TranslationFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<TranslationOrderArgType>;
  search?: InputMaybe<TranslationSearchArgType>;
};

export type TranslationKeyOrderArgType = {
  order: OrderEnum;
  sort: TranslationKeyOrderSortEnum;
};

export enum TranslationKeyOrderSortEnum {
  CreatedAt = 'createdAt',
  Key = 'key',
  UpdatedAt = 'updatedAt'
}

export type TranslationKeyPageModel = {
  __typename?: 'TranslationKeyPageModel';
  data: Array<TranslationKeyModel>;
  totalCount: Scalars['Int'];
};

export type TranslationKeySearchArgType = {
  key: TranslationKeySearchKeyEnum;
  value: Scalars['String'];
};

export enum TranslationKeySearchKeyEnum {
  Key = 'key'
}

export type TranslationKeyUpdateDto = {
  translations?: InputMaybe<Array<TranslationUpsertDto>>;
};

export type TranslationModel = {
  __typename?: 'TranslationModel';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  locale: Scalars['String'];
  translationKey: TranslationKeyModel;
  translationKeyId: Scalars['ID'];
  updatedAt: Scalars['Date'];
  value: Scalars['String'];
};

export type TranslationOrderArgType = {
  order: OrderEnum;
  sort: TranslationOrderSortEnum;
};

export enum TranslationOrderSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Value = 'value'
}

export type TranslationPageModel = {
  __typename?: 'TranslationPageModel';
  data: Array<TranslationModel>;
  totalCount: Scalars['Int'];
};

export type TranslationSearchArgType = {
  key: TranslationSearchKeyEnum;
  value: Scalars['String'];
};

export enum TranslationSearchKeyEnum {
  Value = 'VALUE'
}

export type TranslationTemplateDto = {
  content: Scalars['String'];
  locale: Scalars['String'];
};

export type TranslationUpdateDto = {
  locale: Scalars['String'];
  translationKeyId?: InputMaybe<Scalars['ID']>;
  value: Scalars['String'];
};

export type TranslationUpsertDto = {
  locale: Scalars['String'];
  value: Scalars['String'];
};

export type UpdateNotificationPreferenceDto = {
  channel?: InputMaybe<Scalars['String']>;
  enable: Scalars['Boolean'];
};

export type UserCreateDto = {
  active?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  optedInAt?: InputMaybe<Scalars['Date']>;
  phone?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  userReference: Scalars['String'];
};

export type UserFilterArgType = {
  acceptedUserInviteId?: InputMaybe<IdFilterArgType>;
  active?: InputMaybe<BooleanFilterArgType>;
  createdUserInviteId?: InputMaybe<IdFilterArgType>;
  email?: InputMaybe<StringFilterArgType>;
  firstName?: InputMaybe<StringFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
  lastName?: InputMaybe<StringFilterArgType>;
  locale?: InputMaybe<StringFilterArgType>;
  optedInAt?: InputMaybe<DateFilterArgType>;
  phone?: InputMaybe<StringFilterArgType>;
  roleId?: InputMaybe<IdFilterArgType>;
  search?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<StringFilterArgType>;
  userGroupId?: InputMaybe<UserGroupIdFilterArgType>;
  userGroupName?: InputMaybe<UserGroupNameFilterArgType>;
  userProviderId?: InputMaybe<IdFilterArgType>;
  userTokenId?: InputMaybe<IdFilterArgType>;
};

export type UserGroupConfigCreateDto = {
  defaultRoleIds?: InputMaybe<Array<Scalars['ID']>>;
  entity: Scalars['String'];
  groupRelationField?: InputMaybe<Scalars['String']>;
  isUserInMultipleGroups?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  nameField?: InputMaybe<Scalars['String']>;
  type: UserGroupConfigTypeEnum;
  userGroupType: Scalars['String'];
  userRelationEntity?: InputMaybe<Scalars['String']>;
  userRelationField?: InputMaybe<Scalars['String']>;
};

export type UserGroupConfigFilterArgType = {
  entity?: InputMaybe<StringFilterArgType>;
  groupRelationField?: InputMaybe<StringFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
  isUserInMultipleGroups?: InputMaybe<BooleanFilterArgType>;
  name?: InputMaybe<StringFilterArgType>;
  nameField?: InputMaybe<StringFilterArgType>;
  type?: InputMaybe<StringFilterArgType>;
  userGroupConfigId?: InputMaybe<IdFilterArgType>;
  userGroupType?: InputMaybe<StringFilterArgType>;
  userRelationEntity?: InputMaybe<StringFilterArgType>;
  userRelationField?: InputMaybe<StringFilterArgType>;
};

export type UserGroupConfigModel = {
  __typename?: 'UserGroupConfigModel';
  createdAt: Scalars['Date'];
  defaultRoles: RolePageModel;
  entity: Scalars['String'];
  groupRelationField?: Maybe<Scalars['String']>;
  hasMembers: Scalars['Boolean'];
  id: Scalars['ID'];
  isUserInMultipleGroups: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  nameField?: Maybe<Scalars['String']>;
  type: UserGroupConfigTypeEnum;
  updatedAt: Scalars['Date'];
  userGroupType: Scalars['String'];
  userRelationEntity?: Maybe<Scalars['String']>;
  userRelationField?: Maybe<Scalars['String']>;
};


export type UserGroupConfigModelDefaultRolesArgs = {
  filter?: InputMaybe<RoleFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RoleOrderArgType>;
  search?: InputMaybe<RoleSearchArgType>;
};

export type UserGroupConfigOrderArgType = {
  order: OrderEnum;
  sort: UserGroupConfigOrderSortEnum;
};

export enum UserGroupConfigOrderSortEnum {
  CreatedAt = 'createdAt',
  Entity = 'entity',
  GroupRelationField = 'groupRelationField',
  IsUserInMultipleGroups = 'isUserInMultipleGroups',
  Name = 'name',
  NameField = 'nameField',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UserGroupType = 'userGroupType',
  UserRelationEntity = 'userRelationEntity',
  UserRelationField = 'userRelationField'
}

export type UserGroupConfigPageModel = {
  __typename?: 'UserGroupConfigPageModel';
  data: Array<UserGroupConfigModel>;
  totalCount: Scalars['Int'];
};

export type UserGroupConfigSearchArgType = {
  key: UserGroupConfigSearchKeyEnum;
  value: Scalars['String'];
};

export enum UserGroupConfigSearchKeyEnum {
  Entity = 'entity',
  GroupRelationField = 'groupRelationField',
  Name = 'name',
  NameField = 'nameField',
  UserGroupType = 'userGroupType',
  UserRelationEntity = 'userRelationEntity',
  UserRelationField = 'userRelationField'
}

export enum UserGroupConfigTypeEnum {
  BelongsTo = 'belongs_to',
  IsA = 'is_a'
}

export type UserGroupConfigUpdateDto = {
  defaultRoleIds?: InputMaybe<Array<Scalars['ID']>>;
  entity?: InputMaybe<Scalars['String']>;
  groupRelationField?: InputMaybe<Scalars['String']>;
  isUserInMultipleGroups?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  nameField?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<UserGroupConfigTypeEnum>;
  userGroupType?: InputMaybe<Scalars['String']>;
  userRelationEntity?: InputMaybe<Scalars['String']>;
  userRelationField?: InputMaybe<Scalars['String']>;
};

export type UserGroupCreateDto = {
  name: Scalars['String'];
  remoteId: Scalars['String'];
  type: Scalars['String'];
  userGroupConfigId: Scalars['String'];
};

export type UserGroupFilterArgType = {
  id?: InputMaybe<IdFilterArgType>;
  memberUserId?: InputMaybe<IdFilterArgType>;
  name?: InputMaybe<StringFilterArgType>;
  remoteId?: InputMaybe<StringFilterArgType>;
  roleId?: InputMaybe<IdFilterArgType>;
  type?: InputMaybe<StringFilterArgType>;
};

export type UserGroupIdFilterArgType = {
  all?: InputMaybe<Array<Scalars['ID']>>;
  equalTo?: InputMaybe<Scalars['ID']>;
  notEqualTo?: InputMaybe<Scalars['ID']>;
  valueIn?: InputMaybe<Array<Scalars['ID']>>;
  valueNotIn?: InputMaybe<Array<Scalars['ID']>>;
};

export type UserGroupModel = {
  __typename?: 'UserGroupModel';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  memberUsers?: Maybe<UserPageModel>;
  name: Scalars['String'];
  remoteId: Scalars['String'];
  roles: RolePageModel;
  type: Scalars['String'];
  updatedAt: Scalars['Date'];
};


export type UserGroupModelMemberUsersArgs = {
  filter?: InputMaybe<UserFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrderArgType>;
  search?: InputMaybe<UserSearchArgType>;
};


export type UserGroupModelRolesArgs = {
  filter?: InputMaybe<RoleFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RoleOrderArgType>;
  search?: InputMaybe<RoleSearchArgType>;
};

export type UserGroupNameFilterArgType = {
  all?: InputMaybe<Array<Scalars['String']>>;
  equalTo?: InputMaybe<Scalars['String']>;
  iLike?: InputMaybe<Scalars['String']>;
  like?: InputMaybe<Scalars['String']>;
  notEqualTo?: InputMaybe<Scalars['String']>;
  valueIn?: InputMaybe<Array<Scalars['String']>>;
  valueNotIn?: InputMaybe<Array<Scalars['String']>>;
};

export type UserGroupOrderArgType = {
  order: OrderEnum;
  sort: UserGroupOrderSortEnum;
};

export enum UserGroupOrderSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  RemoteId = 'remoteId',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type UserGroupPageModel = {
  __typename?: 'UserGroupPageModel';
  data: Array<UserGroupModel>;
  totalCount: Scalars['Int'];
};

export type UserGroupRoleRelationDto = {
  roleIds: Array<Scalars['ID']>;
};

export type UserGroupSearchArgType = {
  key: UserGroupSearchKeyEnum;
  value: Scalars['String'];
};

export enum UserGroupSearchKeyEnum {
  Name = 'name',
  RemoteId = 'remoteId',
  Type = 'type'
}

export type UserGroupUpdateDto = {
  name?: InputMaybe<Scalars['String']>;
  remoteId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type UserGroupUserRelationDto = {
  userIds: Array<Scalars['ID']>;
};

export type UserInviteCreateDto = {
  createdByUserId: Scalars['ID'];
  data?: InputMaybe<Scalars['JsonObject']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserInviteStatusEnum>;
};

export type UserInviteFilterArgType = {
  acceptedByUserId?: InputMaybe<IdFilterArgType>;
  createdByUserId?: InputMaybe<IdFilterArgType>;
  email?: InputMaybe<StringFilterArgType>;
  firstName?: InputMaybe<StringFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
  lastName?: InputMaybe<StringFilterArgType>;
  locale?: InputMaybe<StringFilterArgType>;
  status?: InputMaybe<StringFilterArgType>;
  userTokenId?: InputMaybe<IdFilterArgType>;
};

export type UserInviteModel = {
  __typename?: 'UserInviteModel';
  acceptedBy?: Maybe<UserModel>;
  acceptedByUserId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['Date'];
  createdBy: UserModel;
  createdByUserId: Scalars['ID'];
  data?: Maybe<Scalars['JsonObject']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  status: UserInviteStatusEnum;
  statusUpdatedAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  userToken: UserTokenModel;
  userTokenId: Scalars['ID'];
};


export type UserInviteModelAcceptedByArgs = {
  filter?: InputMaybe<UserFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrderArgType>;
  search?: InputMaybe<UserSearchArgType>;
};


export type UserInviteModelCreatedByArgs = {
  filter?: InputMaybe<UserFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrderArgType>;
  search?: InputMaybe<UserSearchArgType>;
};


export type UserInviteModelUserTokenArgs = {
  filter?: InputMaybe<UserTokenFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserTokenOrderArgType>;
  search?: InputMaybe<UserTokenSearchArgType>;
};

export type UserInviteOrderArgType = {
  order: OrderEnum;
  sort: UserInviteOrderSortEnum;
};

export enum UserInviteOrderSortEnum {
  CreatedAt = 'createdAt',
  Data = 'data',
  Email = 'email',
  FirstName = 'firstName',
  LastName = 'lastName',
  Locale = 'locale',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type UserInvitePageModel = {
  __typename?: 'UserInvitePageModel';
  data: Array<UserInviteModel>;
  totalCount: Scalars['Int'];
};

export type UserInviteSearchArgType = {
  key: UserInviteSearchKeyEnum;
  value: Scalars['String'];
};

export enum UserInviteSearchKeyEnum {
  FirstName = 'firstName',
  LastName = 'lastName',
  Locale = 'locale'
}

export enum UserInviteStatusEnum {
  Accepted = 'accepted',
  Canceled = 'canceled',
  Expired = 'expired',
  Pending = 'pending'
}

export type UserInviteUpdateDto = {
  acceptedByUserId?: InputMaybe<Scalars['ID']>;
  data?: InputMaybe<Scalars['JsonObject']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type UserInvitesCreateDto = {
  userInvites: Array<UserInviteCreateDto>;
};

export type UserModel = {
  __typename?: 'UserModel';
  acceptedUserInvite?: Maybe<UserInviteModel>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['Date'];
  createdUserInvites?: Maybe<UserInvitePageModel>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  optedInAt?: Maybe<Scalars['Date']>;
  phone?: Maybe<Scalars['String']>;
  roles?: Maybe<RolePageModel>;
  timezone?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
  userGroups?: Maybe<UserGroupPageModel>;
  userInviteId?: Maybe<Scalars['ID']>;
  userProviders: UserProviderPageModel;
  userReference: Scalars['String'];
  userTokens: UserTokenPageModel;
};


export type UserModelAcceptedUserInviteArgs = {
  filter?: InputMaybe<UserInviteFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserInviteOrderArgType>;
  search?: InputMaybe<UserInviteSearchArgType>;
};


export type UserModelCreatedUserInvitesArgs = {
  filter?: InputMaybe<UserInviteFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserInviteOrderArgType>;
  search?: InputMaybe<UserInviteSearchArgType>;
};


export type UserModelRolesArgs = {
  filter?: InputMaybe<RoleFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RoleOrderArgType>;
  search?: InputMaybe<RoleSearchArgType>;
};


export type UserModelUserGroupsArgs = {
  filter?: InputMaybe<UserGroupFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserGroupOrderArgType>;
  search?: InputMaybe<UserGroupSearchArgType>;
};


export type UserModelUserProvidersArgs = {
  filter?: InputMaybe<UserProviderFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserProviderOrderArgType>;
  search?: InputMaybe<UserProviderSearchArgType>;
};


export type UserModelUserTokensArgs = {
  filter?: InputMaybe<UserTokenFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserTokenOrderArgType>;
  search?: InputMaybe<UserTokenSearchArgType>;
};

export type UserOrderArgType = {
  order: OrderEnum;
  sort: UserOrderSortEnum;
};

export enum UserOrderSortEnum {
  Active = 'active',
  CreatedAt = 'createdAt',
  Email = 'email',
  FirstName = 'firstName',
  LastName = 'lastName',
  Locale = 'locale',
  OptedInAt = 'optedInAt',
  Phone = 'phone',
  Timezone = 'timezone',
  UpdatedAt = 'updatedAt'
}

export type UserPageModel = {
  __typename?: 'UserPageModel';
  data: Array<UserModel>;
  totalCount: Scalars['Int'];
};

export type UserPermissionModel = {
  __typename?: 'UserPermissionModel';
  object: Scalars['String'];
  operation: Scalars['String'];
  resolvers: Array<Scalars['String']>;
  scope: PermissionScopeEnum;
  service: Scalars['String'];
  userGroupType?: Maybe<Scalars['String']>;
};

export type UserProviderBulkFilterArgType = {
  id?: InputMaybe<IdBulkFilterArgType>;
  optedIn?: InputMaybe<BooleanFilterArgType>;
  providerIdentifier?: InputMaybe<StringFilterArgType>;
  providerUserIdentifier?: InputMaybe<StringFilterArgType>;
  userId?: InputMaybe<IdFilterArgType>;
};

export type UserProviderCreateDto = {
  optedIn: Scalars['Boolean'];
  providerIdentifier: Scalars['String'];
  providerUserIdentifier: Scalars['String'];
  userId?: InputMaybe<Scalars['ID']>;
};

export type UserProviderFilterArgType = {
  id?: InputMaybe<IdFilterArgType>;
  optedIn?: InputMaybe<BooleanFilterArgType>;
  providerIdentifier?: InputMaybe<StringFilterArgType>;
  providerUserIdentifier?: InputMaybe<StringFilterArgType>;
  userId?: InputMaybe<IdFilterArgType>;
};

export type UserProviderModel = {
  __typename?: 'UserProviderModel';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  optedIn: Scalars['Boolean'];
  providerIdentifier: Scalars['String'];
  providerUserIdentifier: Scalars['String'];
  updatedAt: Scalars['Date'];
  user: UserModel;
  userId: Scalars['ID'];
};

export type UserProviderOrderArgType = {
  order: OrderEnum;
  sort: UserProviderOrderSortEnum;
};

export enum UserProviderOrderSortEnum {
  CreatedAt = 'createdAt',
  OptedIn = 'optedIn',
  ProviderIdentifier = 'providerIdentifier',
  ProviderUserIdentifier = 'providerUserIdentifier',
  UpdatedAt = 'updatedAt'
}

export type UserProviderPageModel = {
  __typename?: 'UserProviderPageModel';
  data: Array<UserProviderModel>;
  totalCount: Scalars['Int'];
};

export type UserProviderSearchArgType = {
  key: UserProviderSearchKeyEnum;
  value: Scalars['String'];
};

export enum UserProviderSearchKeyEnum {
  ProviderIdentifier = 'providerIdentifier',
  ProviderUserIdentifier = 'providerUserIdentifier'
}

export type UserProviderUpdateDto = {
  optedIn?: InputMaybe<Scalars['Boolean']>;
  providerIdentifier?: InputMaybe<Scalars['String']>;
  providerUserIdentifier?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type UserRefreshTokenCreateDto = {
  keepLoggedIn?: InputMaybe<Scalars['Boolean']>;
  userId: Scalars['String'];
};

export type UserRefreshTokenVerifyDto = {
  token: Scalars['String'];
};

export type UserResetPasswordTokenCreateDto = {
  userId: Scalars['String'];
};

export type UserRoleRelationDto = {
  roleIds: Array<Scalars['ID']>;
};

export type UserSearchArgType = {
  key: UserSearchKeyEnum;
  value: Scalars['String'];
};

export enum UserSearchKeyEnum {
  Email = 'email',
  FirstName = 'firstName',
  LastName = 'lastName',
  Locale = 'locale',
  Phone = 'phone',
  Timezone = 'timezone'
}

export type UserTokenCreateDto = {
  token: Scalars['String'];
  type: Scalars['String'];
  userId?: InputMaybe<Scalars['ID']>;
  validTill: Scalars['Date'];
};

export type UserTokenFilterArgType = {
  id?: InputMaybe<IdFilterArgType>;
  token?: InputMaybe<StringFilterArgType>;
  type?: InputMaybe<StringFilterArgType>;
  userId?: InputMaybe<IdFilterArgType>;
  userInviteId?: InputMaybe<IdFilterArgType>;
  validTill?: InputMaybe<DateFilterArgType>;
};

export type UserTokenModel = {
  __typename?: 'UserTokenModel';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  token: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['Date'];
  user?: Maybe<UserModel>;
  userId: Scalars['ID'];
  userInvite?: Maybe<UserInviteModel>;
  validTill: Scalars['Date'];
};


export type UserTokenModelUserInviteArgs = {
  filter?: InputMaybe<UserInviteFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserInviteOrderArgType>;
  search?: InputMaybe<UserInviteSearchArgType>;
};

export type UserTokenOrderArgType = {
  order: OrderEnum;
  sort: UserTokenOrderSortEnum;
};

export enum UserTokenOrderSortEnum {
  CreatedAt = 'createdAt',
  Token = 'token',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  ValidTill = 'validTill'
}

export type UserTokenPageModel = {
  __typename?: 'UserTokenPageModel';
  data: Array<UserTokenModel>;
  totalCount: Scalars['Int'];
};

export type UserTokenSearchArgType = {
  key: UserTokenSearchKeyEnum;
  value: Scalars['String'];
};

export enum UserTokenSearchKeyEnum {
  Token = 'token',
  Type = 'type'
}

export type UserTokenUpdateDto = {
  token?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
  validTill?: InputMaybe<Scalars['Date']>;
};

export type UserUnreadMessagesModel = {
  __typename?: 'UserUnreadMessagesModel';
  unreadMessageCount: Scalars['Float'];
  userId: Scalars['String'];
};

export type UserUpdateDto = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  optedInAt?: InputMaybe<Scalars['Date']>;
  phone?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
};

export type UserUserGroupRelationDto = {
  userGroupIds: Array<Scalars['ID']>;
};

export type UserValidateEmailTokenCreateDto = {
  userId: Scalars['String'];
};

export type NotifyMutationVariables = Exact<{
  notification: NotificationCreateDto;
}>;


export type NotifyMutation = { __typename?: 'Mutation', notify: { __typename?: 'NotificationCreateModel', webNotifications?: boolean | null } };

export type AddUserMutationVariables = Exact<{
  user: UserCreateDto;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser: { __typename?: 'UserModel', id: string, userReference: string } };


export const NotifyDocument = gql`
    mutation notify($notification: NotificationCreateDto!) {
  notify(notification: $notification) {
    webNotifications
  }
}
    `;
export const AddUserDocument = gql`
    mutation addUser($user: UserCreateDto!) {
  addUser(user: $user) {
    id
    userReference
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    notify(variables: NotifyMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<NotifyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<NotifyMutation>(NotifyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'notify', 'mutation');
    },
    addUser(variables: AddUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddUserMutation>(AddUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addUser', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;