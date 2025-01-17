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

export type AcceptUserInviteV2Dto = {
  token: Scalars['String'];
};

export type AppUriUpdateDto = {
  allowedCallbackUrls?: InputMaybe<Scalars['String']>;
  allowedLogoutUrls?: InputMaybe<Scalars['String']>;
  applicationUrl?: InputMaybe<Scalars['String']>;
  authenticationDomain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  signInUrl?: InputMaybe<Scalars['String']>;
};

export type AuthFormConfigDto = {
  defaultRoleKeys?: InputMaybe<Array<Scalars['String']>>;
  hideRegistration?: InputMaybe<Scalars['Boolean']>;
  privacyPolicyLink?: InputMaybe<Scalars['String']>;
  requireEmailConfirmation?: InputMaybe<Scalars['Boolean']>;
  showCompany?: InputMaybe<Scalars['Boolean']>;
  showFirstName?: InputMaybe<Scalars['Boolean']>;
  showLastName?: InputMaybe<Scalars['Boolean']>;
  ssoConfig?: InputMaybe<Scalars['JsonObject']>;
  tenantCreation?: InputMaybe<TenantCreationEnum>;
  termsConditionsLink?: InputMaybe<Scalars['String']>;
  translations: Array<FormConfigTranslationDto>;
  twoFactorEnabled?: InputMaybe<Scalars['Boolean']>;
};

export type AuthFormThemeCreateDto = {
  key: Scalars['String'];
  name: Scalars['String'];
};

export type AuthFormThemeUpdateDto = {
  defaultRoleKeys?: InputMaybe<Array<Scalars['String']>>;
  tenantCreation?: InputMaybe<TenantCreationEnum>;
  theme: Scalars['JsonObject'];
};

export type AuthUiThemeModel = {
  __typename?: 'AuthUiThemeModel';
  createdAt?: Maybe<Scalars['Date']>;
  defaultRoleKeys?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Scalars['ID']>;
  key: Scalars['String'];
  name: Scalars['String'];
  tenantCreation?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['JsonObject']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type AuthUiThemePageModel = {
  __typename?: 'AuthUiThemePageModel';
  data: Array<AuthUiThemeModel>;
  totalCount: Scalars['Int'];
};

export type AuthenticationAppUriModel = {
  __typename?: 'AuthenticationAppUriModel';
  allowedCallbackUrls?: Maybe<Scalars['String']>;
  allowedLogoutUrls?: Maybe<Scalars['String']>;
  applicationUrl?: Maybe<Scalars['String']>;
  authenticationDomain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isDomainVerified?: Maybe<Scalars['Boolean']>;
  signInUrl?: Maybe<Scalars['String']>;
};

export type AuthenticationProviderConfigUpdateDto = {
  enableFacebook: Scalars['Boolean'];
  enableGithub: Scalars['Boolean'];
  enableGoogle: Scalars['Boolean'];
  enableLinkedin: Scalars['Boolean'];
  enableTwitter: Scalars['Boolean'];
  enabled: Scalars['Boolean'];
  facebook: AuthenticationProviderDto;
  github: AuthenticationProviderDto;
  google: AuthenticationProviderDto;
  linkedin: AuthenticationProviderDto;
  twitter: AuthenticationProviderDto;
};

export type AuthenticationProviderDto = {
  authCallbackUri?: InputMaybe<Scalars['String']>;
  authOriginUri?: InputMaybe<Scalars['String']>;
  authorizationScopes?: InputMaybe<Array<Scalars['String']>>;
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type AuthenticationProviderModel = {
  __typename?: 'AuthenticationProviderModel';
  authCallbackUri?: Maybe<Scalars['String']>;
  authOriginUri?: Maybe<Scalars['String']>;
  authorizationScopes?: Maybe<Array<Scalars['String']>>;
  clientId?: Maybe<Scalars['String']>;
  clientSecret?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type AuthenticationProviderSsoConfigModel = {
  __typename?: 'AuthenticationProviderSsoConfigModel';
  authOriginUri: Scalars['String'];
  dnsRecordUri: Scalars['String'];
  enableFacebook: Scalars['Boolean'];
  enableGithub: Scalars['Boolean'];
  enableGoogle: Scalars['Boolean'];
  enableLinkedin: Scalars['Boolean'];
  enableTwitter: Scalars['Boolean'];
  enabled: Scalars['Boolean'];
  facebook?: Maybe<AuthenticationProviderModel>;
  github?: Maybe<AuthenticationProviderModel>;
  google?: Maybe<AuthenticationProviderModel>;
  linkedin?: Maybe<AuthenticationProviderModel>;
  twitter?: Maybe<AuthenticationProviderModel>;
};

export type BooleanFilterArgType = {
  equalTo?: InputMaybe<Scalars['Boolean']>;
  notEqualTo?: InputMaybe<Scalars['Boolean']>;
};

export type ChangeUserPasswordDto = {
  newPassword: Scalars['String'];
  password: Scalars['String'];
  userId: Scalars['String'];
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

export type ConversationCreateDto = {
  archived?: InputMaybe<Scalars['Boolean']>;
  isGroup?: InputMaybe<Scalars['Boolean']>;
  memberIds: Array<Scalars['String']>;
  ownerId: Scalars['String'];
  tags?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};

export type ConversationFilterArgType = {
  conversationUserId?: InputMaybe<IdFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
  isGroup?: InputMaybe<BooleanFilterArgType>;
  memberId?: InputMaybe<MemberIdFilterArgType>;
  messageId?: InputMaybe<IdFilterArgType>;
  ownerId?: InputMaybe<IdFilterArgType>;
};

export type ConversationModel = {
  __typename?: 'ConversationModel';
  active: Scalars['Boolean'];
  archived: Scalars['Boolean'];
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  isGroup: Scalars['Boolean'];
  ownerId: Scalars['String'];
  tags: ConversationTagPageModel;
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
  users: ConversationUserPageModel;
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

export type ConversationTagModel = {
  __typename?: 'ConversationTagModel';
  conversationId: Scalars['ID'];
  id: Scalars['ID'];
  tag: Scalars['String'];
};

export type ConversationTagPageModel = {
  __typename?: 'ConversationTagPageModel';
  data: Array<ConversationTagModel>;
  totalCount: Scalars['Float'];
};

export type ConversationUserModel = {
  __typename?: 'ConversationUserModel';
  conversationId: Scalars['String'];
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  updatedAt: Scalars['Date'];
};

export type ConversationUserPageModel = {
  __typename?: 'ConversationUserPageModel';
  data: Array<ConversationUserModel>;
  totalCount: Scalars['Float'];
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

export type DataFlushDto = {
  flush?: InputMaybe<Scalars['Boolean']>;
};

export type DataImportDto = {
  data: Scalars['JsonObject'];
  flush?: InputMaybe<Scalars['Boolean']>;
  skipUpdate?: InputMaybe<Scalars['Boolean']>;
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

export type EntityNameFilterArgType = {
  equalTo?: InputMaybe<Scalars['String']>;
};

export type EntityRelationDto = {
  cardinality: Scalars['String'];
  id: Scalars['ID'];
  joinRelationTable?: InputMaybe<Scalars['String']>;
  leftEntityId: Scalars['ID'];
  leftRelationField?: InputMaybe<Scalars['String']>;
  oneToOneParentEntityId?: InputMaybe<Scalars['ID']>;
  relationField?: InputMaybe<Scalars['String']>;
  rightEntityId: Scalars['ID'];
  rightRelationField?: InputMaybe<Scalars['String']>;
};

export type EntityRelationModel = {
  __typename?: 'EntityRelationModel';
  cardinality: Scalars['String'];
  id: Scalars['ID'];
  joinRelationTable?: Maybe<Scalars['String']>;
  leftEntity: Scalars['String'];
  leftEntityId: Scalars['ID'];
  leftRelationField?: Maybe<Scalars['String']>;
  oneToOneParentEntity?: Maybe<Scalars['String']>;
  oneToOneParentEntityId?: Maybe<Scalars['ID']>;
  relationField?: Maybe<Scalars['String']>;
  rightEntity: Scalars['String'];
  rightEntityId: Scalars['ID'];
  rightRelationField?: Maybe<Scalars['String']>;
};

export type EntityRelationPageModel = {
  __typename?: 'EntityRelationPageModel';
  data: Array<EntityRelationModel>;
  totalCount: Scalars['Int'];
};

export type EnvironmentConfigModel = {
  __typename?: 'EnvironmentConfigModel';
  applicationUrl?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type EnvironmentConfigUpdateDto = {
  applicationUrl?: InputMaybe<Scalars['String']>;
  baasUrl?: InputMaybe<Scalars['String']>;
  fromEmail?: InputMaybe<Scalars['String']>;
  roqOneFrontendUrl?: InputMaybe<Scalars['String']>;
  sendGridApiKey?: InputMaybe<Scalars['String']>;
};

export type EnvironmentInitialiseDto = {
  id: Scalars['String'];
};

export type EnvironmentStatsModel = {
  __typename?: 'EnvironmentStatsModel';
  count: Scalars['Float'];
  entity: StatEntityEnum;
  timestamp: Scalars['Float'];
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
  entityName: Scalars['String'];
  entityReference: Scalars['ID'];
  fileId: Scalars['ID'];
};

export type FileAssociationFilterArgType = {
  entityName?: InputMaybe<StringFilterArgType>;
  entityReference?: InputMaybe<StringFilterArgType>;
  fileId?: InputMaybe<IdFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
};

export type FileAssociationModel = {
  __typename?: 'FileAssociationModel';
  createdAt: Scalars['Date'];
  entityName: Scalars['String'];
  entityReference: Scalars['ID'];
  file: FileModel;
  fileId: Scalars['ID'];
  id: Scalars['ID'];
  updatedAt: Scalars['Date'];
};

export type FileAssociationOrderArgType = {
  order: OrderEnum;
  sort: FileAssociationOrderSortEnum;
};

export enum FileAssociationOrderSortEnum {
  CreatedAt = 'createdAt',
  EntityName = 'entityName',
  EntityReference = 'entityReference',
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
  EntityName = 'entityName',
  EntityReference = 'entityReference'
}

export type FileCategoryContentGroupCreateDto = {
  key: Scalars['String'];
  name: Scalars['String'];
};

export type FileCategoryContentGroupFilterArgType = {
  fileCategoryId?: InputMaybe<IdFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
  key?: InputMaybe<StringFilterArgType>;
  name?: InputMaybe<StringFilterArgType>;
};

export type FileCategoryContentGroupModel = {
  __typename?: 'FileCategoryContentGroupModel';
  createdAt: Scalars['Date'];
  fileCategories: FileCategoryPageModel;
  fileCategoryContentTypes: FileCategoryContentTypePageModel;
  id: Scalars['ID'];
  key: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['Date'];
};


export type FileCategoryContentGroupModelFileCategoriesArgs = {
  filter?: InputMaybe<FileCategoryFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<FileCategoryOrderArgType>;
  search?: InputMaybe<FileCategorySearchArgType>;
};


export type FileCategoryContentGroupModelFileCategoryContentTypesArgs = {
  filter?: InputMaybe<FileCategoryContentTypeFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<FileCategoryContentTypeOrderArgType>;
  search?: InputMaybe<FileCategoryContentTypeSearchArgType>;
};

export type FileCategoryContentGroupOrderArgType = {
  order: OrderEnum;
  sort: FileCategoryContentGroupOrderSortEnum;
};

export enum FileCategoryContentGroupOrderSortEnum {
  CreatedAt = 'createdAt',
  Key = 'key',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type FileCategoryContentGroupPageModel = {
  __typename?: 'FileCategoryContentGroupPageModel';
  data: Array<FileCategoryContentGroupModel>;
  totalCount: Scalars['Int'];
};

export type FileCategoryContentGroupSearchArgType = {
  key: FileCategoryContentGroupSearchKeyEnum;
  value: Scalars['String'];
};

export enum FileCategoryContentGroupSearchKeyEnum {
  Key = 'key',
  Name = 'name'
}

export type FileCategoryContentGroupUpdateDto = {
  name?: InputMaybe<Scalars['String']>;
};

export type FileCategoryContentTypeFilterArgType = {
  fileCategoryContentGroup?: InputMaybe<StringFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
  key?: InputMaybe<StringFilterArgType>;
  name?: InputMaybe<StringFilterArgType>;
};

export type FileCategoryContentTypeModel = {
  __typename?: 'FileCategoryContentTypeModel';
  createdAt: Scalars['Date'];
  fileCategoryContentGroup: FileCategoryContentGroupModel;
  fileCategoryContentGroupId: Scalars['ID'];
  id: Scalars['ID'];
  key: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type FileCategoryContentTypeOrderArgType = {
  order: OrderEnum;
  sort: FileCategoryContentTypeOrderSortEnum;
};

export enum FileCategoryContentTypeOrderSortEnum {
  CreatedAt = 'createdAt',
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
  FileCategoryContentGroupId = 'fileCategoryContentGroupId',
  Key = 'key',
  Name = 'name'
}

export type FileCategoryCreateDto = {
  fileCategoryContentGroupIds?: InputMaybe<Array<Scalars['ID']>>;
  isPublicByDefault?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
  maxSize?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
};

export type FileCategoryFilterArgType = {
  id?: InputMaybe<IdFilterArgType>;
  key?: InputMaybe<StringFilterArgType>;
  maxSize?: InputMaybe<NumberFilterArgType>;
  name?: InputMaybe<StringFilterArgType>;
};

export type FileCategoryModel = {
  __typename?: 'FileCategoryModel';
  createdAt: Scalars['Date'];
  fileCategoryContentGroups?: Maybe<FileCategoryContentGroupPageModel>;
  id: Scalars['ID'];
  isPublicByDefault: Scalars['Boolean'];
  key: Scalars['String'];
  maxSize?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  updatedAt: Scalars['Date'];
};


export type FileCategoryModelFileCategoryContentGroupsArgs = {
  filter?: InputMaybe<FileCategoryContentGroupFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<FileCategoryContentGroupOrderArgType>;
  search?: InputMaybe<FileCategoryContentGroupSearchArgType>;
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
  fileCategoryContentGroupIds?: InputMaybe<Array<Scalars['ID']>>;
  isPublicByDefault?: InputMaybe<Scalars['Boolean']>;
  maxSize?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileCreateDto = {
  contentType: Scalars['String'];
  fileCategory: Scalars['String'];
  name: Scalars['String'];
};

export type FileCreateUploadModel = {
  __typename?: 'FileCreateUploadModel';
  contentType: Scalars['String'];
  createdAt: Scalars['Date'];
  createdByUserId: Scalars['ID'];
  fileCategory: FileCategoryModel;
  fileCategoryId: Scalars['ID'];
  formFields: Scalars['JsonObject'];
  id: Scalars['ID'];
  isPublic: Scalars['Boolean'];
  name: Scalars['String'];
  status: FileStatusEnum;
  updatedAt: Scalars['Date'];
  uploadUrl: Scalars['String'];
};

export type FileCreateV2Dto = {
  contentType: Scalars['String'];
  fileCategory: Scalars['String'];
  name: Scalars['String'];
};

export type FileFilterArgType = {
  contentType?: InputMaybe<StringFilterArgType>;
  createdAt?: InputMaybe<DateFilterArgType>;
  createdByUserId?: InputMaybe<IdFilterArgType>;
  entityName?: InputMaybe<EntityNameFilterArgType>;
  entityReferences?: InputMaybe<StringFilterArgType>;
  fileCategory?: InputMaybe<StringFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
  isPublic?: InputMaybe<BooleanFilterArgType>;
  name?: InputMaybe<StringFilterArgType>;
  status?: InputMaybe<StatusFilterArgType>;
};

export type FileModel = {
  __typename?: 'FileModel';
  contentType: Scalars['String'];
  createdAt: Scalars['Date'];
  createdByUser?: Maybe<UserModel>;
  createdByUserId: Scalars['ID'];
  fileAssociations: FileAssociationPageModel;
  fileCategory: FileCategoryModel;
  fileCategoryId: Scalars['ID'];
  id: Scalars['ID'];
  isPublic: Scalars['Boolean'];
  name: Scalars['String'];
  status: FileStatusEnum;
  updatedAt: Scalars['Date'];
  url?: Maybe<Scalars['String']>;
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
  name?: InputMaybe<Scalars['String']>;
};

export type FileUpdateV2Dto = {
  fileId: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<FileStatusEnum>;
};

export type FormConfigTranslationDto = {
  key: Scalars['String'];
  locale: Scalars['String'];
  value: Scalars['String'];
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
  baseUrl?: InputMaybe<Scalars['String']>;
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
  secure?: InputMaybe<Scalars['String']>;
  senderName?: InputMaybe<Scalars['String']>;
  serviceAccount?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
};

export type IntegrationCredentialsModel = {
  __typename?: 'IntegrationCredentialsModel';
  accountSid?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  applicationId?: Maybe<Scalars['String']>;
  baseUrl?: Maybe<Scalars['String']>;
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
  secure?: Maybe<Scalars['String']>;
  senderName?: Maybe<Scalars['String']>;
  serviceAccount?: Maybe<Scalars['String']>;
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

export type MailCreateDto = {
  data?: InputMaybe<Array<NotificationTemplateVariableDto>>;
  emails: Array<Scalars['String']>;
  key: Scalars['String'];
  locale: Scalars['String'];
};

export type MailCreateModel = {
  __typename?: 'MailCreateModel';
  mailsSent: MailCreateUserModel;
};

export type MailCreateUserModel = {
  __typename?: 'MailCreateUserModel';
  count: Scalars['Int'];
};

export type MailLocalizedTemplateCreateDto = {
  content: Scalars['String'];
  defaultVariables?: InputMaybe<Array<NotificationTemplateDefaultVariableDto>>;
  key: Scalars['String'];
  locale: Scalars['String'];
  subject: Scalars['String'];
  templateId: Scalars['String'];
};

export type MailLocalizedTemplateFilterArgType = {
  content?: InputMaybe<StringFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
  key?: InputMaybe<StringFilterArgType>;
  locale?: InputMaybe<StringFilterArgType>;
  subject?: InputMaybe<StringFilterArgType>;
  templateId?: InputMaybe<StringFilterArgType>;
};

export type MailLocalizedTemplateModel = {
  __typename?: 'MailLocalizedTemplateModel';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  defaultVariables?: Maybe<Array<NotificationTemplateVariableModel>>;
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type MailLocalizedTemplateOrderArgType = {
  order: OrderEnum;
  sort: MailLocalizedTemplateOrderSortEnum;
};

export enum MailLocalizedTemplateOrderSortEnum {
  Content = 'content',
  CreatedAt = 'createdAt',
  Key = 'key',
  Locale = 'locale',
  UpdatedAt = 'updatedAt'
}

export type MailLocalizedTemplatePageModel = {
  __typename?: 'MailLocalizedTemplatePageModel';
  data: Array<MailLocalizedTemplateModel>;
  totalCount: Scalars['Int'];
};

export type MailLocalizedTemplateSearchArgType = {
  key: MailLocalizedTemplateSearchKeyEnum;
  value: Scalars['String'];
};

export enum MailLocalizedTemplateSearchKeyEnum {
  Key = 'key'
}

export type MailLocalizedTemplateUpdateDto = {
  content?: InputMaybe<Scalars['String']>;
  defaultVariables?: InputMaybe<Array<NotificationTemplateDefaultVariableDto>>;
  key?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  templateId?: InputMaybe<Scalars['String']>;
};

export type MailTemplateCreateDto = {
  active: Scalars['Boolean'];
  content: Scalars['String'];
  defaultVariables?: InputMaybe<Array<NotificationTemplateDefaultVariableDto>>;
  description?: InputMaybe<Scalars['String']>;
  locale: Scalars['String'];
  name: Scalars['String'];
  subject: Scalars['String'];
};

export type MailTemplateModel = {
  __typename?: 'MailTemplateModel';
  active: Scalars['Boolean'];
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isSystem: Scalars['Boolean'];
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
};

export type MailTemplatePageModel = {
  __typename?: 'MailTemplatePageModel';
  data: Array<MailTemplateModel>;
  totalCount: Scalars['Int'];
};

export type MailTemplateUpdateDto = {
  active?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type MarkNotificationsDto = {
  read: Scalars['Boolean'];
  seen: Scalars['Boolean'];
};

export type MemberIdFilterArgType = {
  equalTo?: InputMaybe<Scalars['ID']>;
};

export type MessageCreateDto = {
  authorId: Scalars['String'];
  body: Scalars['String'];
  conversationId: Scalars['String'];
  fileId?: InputMaybe<Scalars['String']>;
  isSystem: Scalars['Boolean'];
};

export type MessageFilterArgType = {
  body?: InputMaybe<StringFilterArgType>;
  conversationId?: InputMaybe<IdFilterArgType>;
  conversationUserId?: InputMaybe<IdFilterArgType>;
  fileId?: InputMaybe<IdFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
  messageStatusId?: InputMaybe<IdFilterArgType>;
};

export type MessageModel = {
  __typename?: 'MessageModel';
  authorId?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  conversationId: Scalars['String'];
  createdAt: Scalars['Date'];
  deletedAt: Scalars['Date'];
  file?: Maybe<FileModel>;
  fileId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  messageStatusId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
};

export type MessageOrderArgType = {
  order: Scalars['String'];
  sort: Scalars['String'];
};

export type MessagePageModel = {
  __typename?: 'MessagePageModel';
  data: Array<MessageModel>;
  totalCount: Scalars['Float'];
};

export type MessageSearchArgType = {
  key: Scalars['String'];
  value: Scalars['String'];
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

export type MultiTenancyStatusModel = {
  __typename?: 'MultiTenancyStatusModel';
  active: Scalars['Boolean'];
  count: Scalars['Int'];
  registrationEnabled: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptUserInvite: UserInviteModel;
  acceptUserInviteV2: UserInviteModel;
  addUsersToUserGroup: Scalars['Boolean'];
  assignRolesToUser: Scalars['Boolean'];
  assignTagsToConversation: Scalars['Boolean'];
  buildQueryPlan: Array<QueryPlanModel>;
  cancelUserInvite: UserInviteModel;
  changeUserPassword: Scalars['Boolean'];
  changeUserPasswordV2: Scalars['Boolean'];
  createConversation: ConversationModel;
  createFileAssociation: FileAssociationModel;
  createFileAssociationV2: FileAssociationModel;
  createFileUpload: FileCreateUploadModel;
  createFileUploadV2: FileCreateUploadModel;
  createMessage: Scalars['Boolean'];
  createProjectEntity: ProjectEntityModel;
  createTenant: TenantModel;
  createTranslationKey: TranslationKeyModel;
  createUser: UserModel;
  createUserGroup: UserGroupModel;
  deleteConversation: Scalars['ID'];
  deleteFileAssociations: Array<Scalars['String']>;
  deleteFiles: Array<Scalars['ID']>;
  deleteProjectEntity: Scalars['Boolean'];
  generateUserPhoneOtp: Scalars['String'];
  makeFilePrivate: FileModel;
  makeFilePublic: FileModel;
  markAllNotificationsAsRead: Scalars['Int'];
  markNotifications: Array<NotificationModel>;
  notify: NotificationCreateModel;
  removeUsersFromUserGroup: Scalars['Boolean'];
  resendUserInvite: UserInviteModel;
  resendUserPhoneOtp: ResendUserPhoneOtpResponseModel;
  sendMail: MailCreateModel;
  sendUserConfirmationMail: Scalars['Boolean'];
  /** Create UserInvite and send email */
  sendUserInvites: CreateUserInvitesModel;
  /** Create UserInvite and send email */
  sendUserInvitesV2: CreateUserInvitesModel;
  sendUserResetPasswordMail: Scalars['Boolean'];
  unassignRolesFromUser: Scalars['Boolean'];
  unassignTagsFromConversation: Scalars['Boolean'];
  updateFile: FileModel;
  updateFileStatus: FileModel;
  updateFileV2: FileModel;
  updateNotificationPreference: NotificationPreferenceModel;
  updateProfile: UserProfileModel;
  updateProjectEntity: ProjectEntityModel;
  updateProjectPermissions: RoleModel;
  updateTenant: TenantModel;
  updateTranslationKey: TranslationKeyModel;
  updateUser: UserModel;
  updateUserGroup: UserGroupModel;
  updateUserInvite: UserInviteModel;
  upsertTranslationKeys: Array<TranslationKeyModel>;
  verifyPassword: Scalars['Boolean'];
  verifyUserPhoneOtp: VerifyUserPhoneOtpResponseModel;
};


export type MutationAcceptUserInviteArgs = {
  acceptUserInvite: AcceptUserInviteDto;
};


export type MutationAcceptUserInviteV2Args = {
  data: AcceptUserInviteV2Dto;
};


export type MutationAddUsersToUserGroupArgs = {
  userGroupId: Scalars['ID'];
  userIds: Array<Scalars['ID']>;
};


export type MutationAssignRolesToUserArgs = {
  roleKeys: Array<Scalars['String']>;
  userId: Scalars['ID'];
};


export type MutationAssignTagsToConversationArgs = {
  conversationId: Scalars['ID'];
  tags: Array<Scalars['String']>;
};


export type MutationBuildQueryPlanArgs = {
  entity: Scalars['String'];
  operation: ResourceOperationEnum;
};


export type MutationCancelUserInviteArgs = {
  id: Scalars['ID'];
};


export type MutationChangeUserPasswordArgs = {
  id: Scalars['ID'];
  input: UserPasswordUpdateDto;
};


export type MutationChangeUserPasswordV2Args = {
  data: ChangeUserPasswordDto;
};


export type MutationCreateConversationArgs = {
  conversation: ConversationCreateDto;
};


export type MutationCreateFileAssociationArgs = {
  createFileAssociationDto: FileAssociationCreateDto;
};


export type MutationCreateFileAssociationV2Args = {
  data: FileAssociationCreateDto;
};


export type MutationCreateFileUploadArgs = {
  createFileDto: FileCreateDto;
};


export type MutationCreateFileUploadV2Args = {
  data: FileCreateV2Dto;
};


export type MutationCreateMessageArgs = {
  message: MessageCreateDto;
};


export type MutationCreateProjectEntityArgs = {
  projectEntity: ProjectEntityDto;
};


export type MutationCreateTenantArgs = {
  tenant: TenantCreateDto;
};


export type MutationCreateTranslationKeyArgs = {
  translationKey: TranslationKeyCreateDto;
};


export type MutationCreateUserArgs = {
  user: UserCreateDto;
};


export type MutationCreateUserGroupArgs = {
  userGroup: UserGroupCreateDto;
};


export type MutationDeleteConversationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteFileAssociationsArgs = {
  filter: FileAssociationBulkFilterArgType;
};


export type MutationDeleteFilesArgs = {
  filter?: InputMaybe<DeleteFilterArgType>;
};


export type MutationDeleteProjectEntityArgs = {
  id: Scalars['ID'];
};


export type MutationGenerateUserPhoneOtpArgs = {
  id: Scalars['ID'];
};


export type MutationMakeFilePrivateArgs = {
  id: Scalars['ID'];
};


export type MutationMakeFilePublicArgs = {
  id: Scalars['ID'];
};


export type MutationMarkNotificationsArgs = {
  mark: MarkNotificationsDto;
  messageIds: Array<Scalars['String']>;
};


export type MutationNotifyArgs = {
  notification: NotificationCreateDto;
};


export type MutationRemoveUsersFromUserGroupArgs = {
  userGroupId: Scalars['ID'];
  userIds: Array<Scalars['ID']>;
};


export type MutationResendUserInviteArgs = {
  id: Scalars['ID'];
};


export type MutationResendUserPhoneOtpArgs = {
  id: Scalars['ID'];
  token: Scalars['String'];
};


export type MutationSendMailArgs = {
  mail: MailCreateDto;
};


export type MutationSendUserConfirmationMailArgs = {
  userId: Scalars['ID'];
  variantKey?: InputMaybe<Scalars['String']>;
};


export type MutationSendUserInvitesArgs = {
  userInvites: UserInvitesCreateDto;
};


export type MutationSendUserInvitesV2Args = {
  data: UserInvitesCreateV2Dto;
};


export type MutationSendUserResetPasswordMailArgs = {
  userId: Scalars['ID'];
  variantKey?: InputMaybe<Scalars['String']>;
};


export type MutationUnassignRolesFromUserArgs = {
  roleKeys: Array<Scalars['String']>;
  userId: Scalars['ID'];
};


export type MutationUnassignTagsFromConversationArgs = {
  conversationId: Scalars['ID'];
  tags: Array<Scalars['String']>;
};


export type MutationUpdateFileArgs = {
  id: Scalars['ID'];
  updateFileDto: FileUpdateDto;
};


export type MutationUpdateFileStatusArgs = {
  id: Scalars['ID'];
  status: FileStatusEnum;
};


export type MutationUpdateFileV2Args = {
  data: FileUpdateV2Dto;
};


export type MutationUpdateNotificationPreferenceArgs = {
  id: Scalars['String'];
  preference: UpdateNotificationPreferenceDto;
};


export type MutationUpdateProfileArgs = {
  id: Scalars['ID'];
  user: UserUpdateProfileDto;
};


export type MutationUpdateProjectEntityArgs = {
  projectEntity: ProjectEntityDto;
};


export type MutationUpdateProjectPermissionsArgs = {
  projectPermissions: ProjectPermissionsDto;
  roleId: Scalars['ID'];
};


export type MutationUpdateTenantArgs = {
  id: Scalars['ID'];
  tenant: TenantUpdateDto;
};


export type MutationUpdateTranslationKeyArgs = {
  id: Scalars['ID'];
  translationKey: TranslationKeyUpdateDto;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  user: UserUpdateDto;
};


export type MutationUpdateUserGroupArgs = {
  id: Scalars['ID'];
  userGroup: UserGroupUpdateDto;
};


export type MutationUpdateUserInviteArgs = {
  id: Scalars['ID'];
  userInvite: UserInviteUpdateDto;
};


export type MutationUpsertTranslationKeysArgs = {
  translationKeys: Array<TranslationKeyCreateDto>;
};


export type MutationVerifyPasswordArgs = {
  password: Scalars['String'];
  userId: Scalars['ID'];
};


export type MutationVerifyUserPhoneOtpArgs = {
  id: Scalars['ID'];
  token: Scalars['String'];
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
  template?: Maybe<NotificationActivityTemplateModel>;
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
  usersNotified: NotificationCreateUserModel;
};

export type NotificationCreateUserModel = {
  __typename?: 'NotificationCreateUserModel';
  count: Scalars['Int'];
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

export type NotificationLocalizedTemplateCreateDto = {
  channel: NotificationChannelEnum;
  content: Scalars['String'];
  defaultVariables?: InputMaybe<Array<NotificationTemplateDefaultVariableDto>>;
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
  defaultVariables?: Maybe<Array<NotificationTemplateVariableModel>>;
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
  defaultVariables?: InputMaybe<Array<NotificationTemplateDefaultVariableDto>>;
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
  key: Scalars['String'];
  name: Scalars['String'];
};

export type NotificationRecipientDto = {
  allUsers?: InputMaybe<Scalars['Boolean']>;
  excludedUserIds?: InputMaybe<Array<Scalars['String']>>;
  tenantIds?: InputMaybe<Array<Scalars['String']>>;
  userGroups?: InputMaybe<NotificationUserGroupDto>;
  userIds?: InputMaybe<Array<Scalars['String']>>;
};

export enum NotificationStatusEnum {
  Error = 'error',
  Sent = 'sent',
  Warning = 'warning'
}

export type NotificationTemplateCreateDto = {
  active: Scalars['Boolean'];
  description: Scalars['String'];
  locale: Scalars['String'];
  name: Scalars['String'];
};

export type NotificationTemplateDefaultVariableDto = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
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
  preferenceSettings?: InputMaybe<NotificationTemplatePreferenceUpdateDto>;
  steps?: InputMaybe<Array<NotificationTemplateStepUpdateDto>>;
};

export type NotificationTemplateVariableDto = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type NotificationTemplateVariableModel = {
  __typename?: 'NotificationTemplateVariableModel';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
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

export type PermissionCreateDto = {
  key: Scalars['String'];
  operation: ResourceOperationEnum;
  platformEntity: Scalars['String'];
  projectEntityId?: InputMaybe<Scalars['String']>;
  roleId: Scalars['ID'];
  scope: PermissionScopeEnum;
  type?: InputMaybe<PermissionTypeEnum>;
};

export type PermissionFilterArgType = {
  id?: InputMaybe<IdFilterArgType>;
  key?: InputMaybe<StringFilterArgType>;
  resolverMapping?: InputMaybe<StringFilterArgType>;
  roleId?: InputMaybe<IdFilterArgType>;
  scope?: InputMaybe<StringFilterArgType>;
  type?: InputMaybe<StringFilterArgType>;
};

export type PermissionModel = {
  __typename?: 'PermissionModel';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  key: Scalars['String'];
  name: Scalars['String'];
  operation: Scalars['String'];
  platformEntity?: Maybe<Scalars['String']>;
  projectEntityId?: Maybe<Scalars['ID']>;
  role: RoleModel;
  roleId: Scalars['ID'];
  scope: PermissionScopeEnum;
  type: PermissionTypeEnum;
  updatedAt: Scalars['Date'];
};

export type PermissionOrderArgType = {
  order: OrderEnum;
  sort: PermissionOrderSortEnum;
};

export enum PermissionOrderSortEnum {
  CreatedAt = 'createdAt',
  Key = 'key',
  Scope = 'scope',
  UpdatedAt = 'updatedAt'
}

export type PermissionPageModel = {
  __typename?: 'PermissionPageModel';
  data: Array<PermissionModel>;
  totalCount: Scalars['Int'];
};

export enum PermissionScopeEnum {
  All = 'all',
  Own = 'own',
  Public = 'public',
  Tenant = 'tenant'
}

export type PermissionSearchArgType = {
  key: PermissionSearchKeyEnum;
  value: Scalars['String'];
};

export enum PermissionSearchKeyEnum {
  Key = 'key'
}

export enum PermissionTypeEnum {
  Platform = 'platform',
  Project = 'project'
}

export type PermissionUpdateDto = {
  operation: ResourceOperationEnum;
  platformEntity: Scalars['String'];
  projectEntityId?: InputMaybe<Scalars['String']>;
  roleId: Scalars['ID'];
  scope?: InputMaybe<PermissionScopeEnum>;
};

export type ProjectEntityDto = {
  entityRelations: Array<EntityRelationDto>;
  id: Scalars['ID'];
  identifierField: Scalars['String'];
  isPublic?: InputMaybe<Scalars['Boolean']>;
  isTenantEntity?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type ProjectEntityFilterArgType = {
  id?: InputMaybe<IdFilterArgType>;
};

export type ProjectEntityModel = {
  __typename?: 'ProjectEntityModel';
  entityRelations: EntityRelationPageModel;
  id: Scalars['ID'];
  identifierField: Scalars['String'];
  isPublic: Scalars['Boolean'];
  name: Scalars['String'];
  permissions: PermissionPageModel;
};

export type ProjectEntityOrderArgType = {
  order: OrderEnum;
  sort: ProjectEntityOrderSortEnum;
};

export enum ProjectEntityOrderSortEnum {
  CreatedAt = 'createdAt'
}

export type ProjectEntityPageModel = {
  __typename?: 'ProjectEntityPageModel';
  data: Array<ProjectEntityModel>;
  totalCount: Scalars['Int'];
};

export type ProjectEntityPathDto = {
  id: Scalars['ID'];
  path: Array<Scalars['ID']>;
  projectEntityId: Scalars['ID'];
  roleId: Scalars['ID'];
};

export type ProjectEntityPathModel = {
  __typename?: 'ProjectEntityPathModel';
  id: Scalars['ID'];
  path: Array<Scalars['ID']>;
  projectEntityId: Scalars['ID'];
  roleId: Scalars['ID'];
};

export type ProjectEntityPathPageModel = {
  __typename?: 'ProjectEntityPathPageModel';
  data: Array<ProjectEntityPathModel>;
  totalCount: Scalars['Int'];
};

export type ProjectPermissionsDto = {
  permissionAssignments: Array<RolePermissionAssignDto>;
  projectEntityId: Scalars['ID'];
  projectEntityPaths: Array<ProjectEntityPathDto>;
  userIdField?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  checkUserInviteToken: CheckUserInviteTokenModel;
  conversations: ConversationPageModel;
  file: FileModel;
  fileCategories: FileCategoryPageModel;
  fileCategory: FileCategoryModel;
  fileCategoryContentGroup: FileCategoryContentGroupModel;
  fileCategoryContentGroups: FileCategoryContentGroupPageModel;
  fileCategoryContentTypes: FileCategoryContentTypePageModel;
  files: FilePageModel;
  isEntityPublic: Scalars['Boolean'];
  isTenantsActive: Scalars['Boolean'];
  messageFileUrl: Scalars['String'];
  messages: MessagePageModel;
  notificationPreference: Array<NotificationPreferenceModel>;
  notifications: NotificationPageModel;
  permissions: PermissionPageModel;
  projectEntities: ProjectEntityPageModel;
  projectEntity: ProjectEntityModel;
  queryPlans: Array<QueryPlanModel>;
  role: RoleModel;
  roles: RolePageModel;
  tenant: TenantModel;
  tenants: TenantPageModel;
  translation: TranslationModel;
  translationKey: TranslationKeyModel;
  translationKeys: TranslationKeyPageModel;
  translations: TranslationPageModel;
  user: UserModel;
  userAccess: UserAccessModel;
  userGroup: UserGroupModel;
  userGroups: UserGroupPageModel;
  userInvite: UserInviteModel;
  userInvites: UserInvitePageModel;
  userProfile: UserProfileModel;
  userProfiles: UserProfilePageModel;
  users: UserPageModel;
};


export type QueryCheckUserInviteTokenArgs = {
  token: Scalars['String'];
};


export type QueryConversationsArgs = {
  filter?: InputMaybe<ConversationFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ConversationOrderArgType>;
  search?: InputMaybe<ConversationSearchArgType>;
};


export type QueryFileArgs = {
  id: Scalars['ID'];
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


export type QueryFileCategoryContentGroupArgs = {
  id: Scalars['ID'];
};


export type QueryFileCategoryContentGroupsArgs = {
  filter?: InputMaybe<FileCategoryContentGroupFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<FileCategoryContentGroupOrderArgType>;
  search?: InputMaybe<FileCategoryContentGroupSearchArgType>;
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


export type QueryIsEntityPublicArgs = {
  entity: Scalars['String'];
};


export type QueryMessageFileUrlArgs = {
  fileId: Scalars['ID'];
  id: Scalars['ID'];
};


export type QueryMessagesArgs = {
  filter?: InputMaybe<MessageFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<MessageOrderArgType>;
  search?: InputMaybe<MessageSearchArgType>;
};


export type QueryNotificationsArgs = {
  page?: InputMaybe<Scalars['Float']>;
  seen?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPermissionsArgs = {
  filter?: InputMaybe<PermissionFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PermissionOrderArgType>;
  search?: InputMaybe<PermissionSearchArgType>;
};


export type QueryProjectEntitiesArgs = {
  filter?: InputMaybe<ProjectEntityFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ProjectEntityOrderArgType>;
};


export type QueryProjectEntityArgs = {
  id: Scalars['ID'];
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


export type QueryTenantArgs = {
  id: Scalars['ID'];
};


export type QueryTenantsArgs = {
  filter?: InputMaybe<TenantFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<TenantOrderArgType>;
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
  searchTerm?: InputMaybe<Scalars['String']>;
};


export type QueryTranslationsArgs = {
  filter?: InputMaybe<TranslationFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<TranslationOrderArgType>;
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


export type QueryUserProfileArgs = {
  id: Scalars['ID'];
};


export type QueryUserProfilesArgs = {
  filter?: InputMaybe<UserFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserProfileOrderArgType>;
  search?: InputMaybe<UserProfileSearchArgType>;
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrderArgType>;
  search?: InputMaybe<UserSearchArgType>;
};

export type QueryPlanModel = {
  __typename?: 'QueryPlanModel';
  entity: Scalars['String'];
  kind: Scalars['String'];
  operation: Scalars['String'];
  queryPlan?: Maybe<Scalars['JsonObject']>;
  role: Scalars['String'];
  scope?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
  tenantName?: Maybe<Scalars['String']>;
  userIdField: Scalars['String'];
};

export type ResendUserPhoneOtpResponseModel = {
  __typename?: 'ResendUserPhoneOtpResponseModel';
  error?: Maybe<Scalars['String']>;
  isValid: Scalars['Boolean'];
  retryIn?: Maybe<Scalars['Int']>;
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

export enum ResourceOperationEnum {
  Create = 'create',
  Delete = 'delete',
  Read = 'read',
  Update = 'update'
}

export type RoleCreateDto = {
  description?: InputMaybe<Scalars['String']>;
  inviteRoleKeys?: InputMaybe<Array<Scalars['String']>>;
  isSystemManaged: Scalars['Boolean'];
  key: Scalars['String'];
  name: Scalars['String'];
  permissionAssignments: Array<RolePermissionAssignDto>;
  reference?: InputMaybe<Scalars['String']>;
};

export type RoleFilterArgType = {
  description?: InputMaybe<StringFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
  invite?: InputMaybe<BooleanFilterArgType>;
  isSystemManaged?: InputMaybe<BooleanFilterArgType>;
  key?: InputMaybe<StringFilterArgType>;
  name?: InputMaybe<StringFilterArgType>;
  permissionId?: InputMaybe<IdFilterArgType>;
  userGroupId?: InputMaybe<IdFilterArgType>;
  userId?: InputMaybe<IdFilterArgType>;
};

export type RoleModel = {
  __typename?: 'RoleModel';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  inviteRoleKeys?: Maybe<Array<Scalars['String']>>;
  isSystemManaged: Scalars['Boolean'];
  key: Scalars['String'];
  name: Scalars['String'];
  projectEntityId?: Maybe<Scalars['ID']>;
  reference?: Maybe<Scalars['String']>;
  userGroups: UserGroupPageModel;
  userIdField?: Maybe<Scalars['String']>;
  users: UsersCountModel;
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
  operation?: InputMaybe<ResourceOperationEnum>;
  platformEntity?: InputMaybe<Scalars['ID']>;
  projectEntityId?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<PermissionScopeEnum>;
  type?: InputMaybe<PermissionTypeEnum>;
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
  inviteRoleKeys?: InputMaybe<Array<Scalars['String']>>;
  isSystemManaged?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  permissionAssignments: Array<RolePermissionAssignDto>;
  reference?: InputMaybe<Scalars['String']>;
};

export enum StatEntityEnum {
  Conversations = 'conversations',
  Files = 'files',
  Tenants = 'tenants',
  Users = 'users'
}

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

export type TenantCreateDto = {
  name: Scalars['String'];
  reference?: InputMaybe<Scalars['String']>;
};

export enum TenantCreationEnum {
  Auto = 'auto',
  Default = 'default',
  Required = 'required'
}

export type TenantFilterArgType = {
  id?: InputMaybe<IdFilterArgType>;
  reference?: InputMaybe<StringFilterArgType>;
};

export type TenantModel = {
  __typename?: 'TenantModel';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  isDefault: Scalars['Boolean'];
  name: Scalars['String'];
  reference?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
  users: UsersCountModel;
};

export type TenantOrderArgType = {
  order: OrderEnum;
  sort: TenantOrderSortEnum;
};

export enum TenantOrderSortEnum {
  CreatedAt = 'createdAt'
}

export type TenantPageModel = {
  __typename?: 'TenantPageModel';
  data: Array<TenantModel>;
  totalCount: Scalars['Int'];
};

export type TenantUpdateDto = {
  name: Scalars['String'];
  reference?: InputMaybe<Scalars['String']>;
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

export type TranslationKeyUpdateDto = {
  translations?: InputMaybe<Array<TranslationUpsertDto>>;
};

export type TranslationModel = {
  __typename?: 'TranslationModel';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  key: Scalars['String'];
  locale: Scalars['String'];
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

export type UserAccessModel = {
  __typename?: 'UserAccessModel';
  access: Scalars['JsonObject'];
  platform: Scalars['JsonObject'];
  project: Scalars['JsonObject'];
};

export type UserConnectedProviderModel = {
  __typename?: 'UserConnectedProviderModel';
  authenticationProviderId: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};

export type UserCreateDto = {
  active?: InputMaybe<Scalars['Boolean']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  customData?: InputMaybe<Scalars['JsonObject']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  isOptedIn?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  reference: Scalars['String'];
  roles?: InputMaybe<Array<Scalars['String']>>;
  tenantId?: InputMaybe<Scalars['ID']>;
  timezone?: InputMaybe<Scalars['String']>;
  twoFactorEnabled?: InputMaybe<Scalars['Boolean']>;
};

export type UserFilterArgType = {
  active?: InputMaybe<BooleanFilterArgType>;
  email?: InputMaybe<StringFilterArgType>;
  firstName?: InputMaybe<StringFilterArgType>;
  id?: InputMaybe<IdFilterArgType>;
  lastName?: InputMaybe<StringFilterArgType>;
  locale?: InputMaybe<StringFilterArgType>;
  optedInAt?: InputMaybe<DateFilterArgType>;
  phone?: InputMaybe<StringFilterArgType>;
  reference?: InputMaybe<StringFilterArgType>;
  roleId?: InputMaybe<IdFilterArgType>;
  roleKey?: InputMaybe<StringFilterArgType>;
  search?: InputMaybe<Scalars['String']>;
  tenantId?: InputMaybe<IdFilterArgType>;
  timezone?: InputMaybe<StringFilterArgType>;
  userGroupId?: InputMaybe<UserGroupIdFilterArgType>;
  userGroupName?: InputMaybe<UserGroupNameFilterArgType>;
  userProviderId?: InputMaybe<IdFilterArgType>;
  withDeactivated?: InputMaybe<BooleanFilterArgType>;
};

export type UserGroupCreateDto = {
  name: Scalars['String'];
  reference: Scalars['String'];
};

export type UserGroupFilterArgType = {
  id?: InputMaybe<IdFilterArgType>;
  name?: InputMaybe<StringFilterArgType>;
  reference?: InputMaybe<StringFilterArgType>;
  roleId?: InputMaybe<IdFilterArgType>;
  type?: InputMaybe<StringFilterArgType>;
  userId?: InputMaybe<IdFilterArgType>;
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
  id: Scalars['ID'];
  name: Scalars['String'];
  reference: Scalars['String'];
  roles: RolePageModel;
  type: Scalars['String'];
  userGroupType?: Maybe<UserGroupTypeModel>;
  users?: Maybe<UserPageModel>;
};


export type UserGroupModelUsersArgs = {
  filter?: InputMaybe<UserFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrderArgType>;
  search?: InputMaybe<UserSearchArgType>;
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
  Reference = 'reference',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type UserGroupPageModel = {
  __typename?: 'UserGroupPageModel';
  data: Array<UserGroupModel>;
  totalCount: Scalars['Int'];
};

export type UserGroupSearchArgType = {
  key: UserGroupSearchKeyEnum;
  value: Scalars['String'];
};

export enum UserGroupSearchKeyEnum {
  Name = 'name',
  Reference = 'reference',
  Type = 'type'
}

export type UserGroupTypeModel = {
  __typename?: 'UserGroupTypeModel';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type UserGroupUpdateDto = {
  name?: InputMaybe<Scalars['String']>;
  reference?: InputMaybe<Scalars['String']>;
};

export type UserInviteCreateDto = {
  createdByUserId: Scalars['ID'];
  data?: InputMaybe<Scalars['JsonObject']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<UserInviteStatusEnum>;
  tenantId?: InputMaybe<Scalars['ID']>;
};

export type UserInviteCreateV2Dto = {
  createdByUserId: Scalars['ID'];
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  injectableVariables?: InputMaybe<Scalars['JsonObject']>;
  lastName?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<Scalars['String']>>;
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
  tenantId?: InputMaybe<IdFilterArgType>;
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
  roleKeys?: Maybe<Array<Scalars['String']>>;
  roles?: Maybe<RolePageModel>;
  status: UserInviteStatusEnum;
  statusUpdatedAt?: Maybe<Scalars['Date']>;
  tenantId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['Date']>;
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


export type UserInviteModelRolesArgs = {
  filter?: InputMaybe<RoleFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RoleOrderArgType>;
  search?: InputMaybe<RoleSearchArgType>;
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
  tenantId?: InputMaybe<Scalars['ID']>;
  userInvites: Array<UserInviteCreateDto>;
};

export type UserInvitesCreateV2Dto = {
  tenantId: Scalars['ID'];
  userInvites: Array<UserInviteCreateV2Dto>;
};

export type UserModel = {
  __typename?: 'UserModel';
  active?: Maybe<Scalars['Boolean']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  customData?: Maybe<Scalars['JsonObject']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isOptedIn?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  reference: Scalars['String'];
  roles?: Maybe<RolePageModel>;
  synced?: Maybe<Scalars['Boolean']>;
  tenant?: Maybe<TenantModel>;
  tenantId?: Maybe<Scalars['ID']>;
  timezone?: Maybe<Scalars['String']>;
  twoFactorEnabled?: Maybe<Scalars['Boolean']>;
  updatedAt: Scalars['Date'];
  userGroups?: Maybe<UserGroupPageModel>;
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
  Phone = 'phone',
  Timezone = 'timezone',
  UpdatedAt = 'updatedAt'
}

export type UserPageModel = {
  __typename?: 'UserPageModel';
  data: Array<UserModel>;
  totalCount: Scalars['Int'];
};

export type UserPasswordUpdateDto = {
  newPassword: Scalars['String'];
  password: Scalars['String'];
};

export type UserProfileModel = {
  __typename?: 'UserProfileModel';
  avatarUrl?: Maybe<Scalars['String']>;
  connectedProviders: Array<UserConnectedProviderModel>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  reference: Scalars['String'];
  timezone?: Maybe<Scalars['String']>;
};

export type UserProfileOrderArgType = {
  order: OrderEnum;
  sort: UserProfileOrderSortEnum;
};

export enum UserProfileOrderSortEnum {
  FirstName = 'firstName',
  LastName = 'lastName',
  Locale = 'locale',
  Timezone = 'timezone'
}

export type UserProfilePageModel = {
  __typename?: 'UserProfilePageModel';
  data: Array<UserProfileModel>;
  totalCount: Scalars['Int'];
};

export type UserProfileSearchArgType = {
  key: UserSearchKeyEnum;
  value: Scalars['String'];
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
  providerIdentifier?: InputMaybe<StringFilterArgType>;
};

export type UserProviderModel = {
  __typename?: 'UserProviderModel';
  authenticationProviderId: Scalars['String'];
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  optedIn: Scalars['Boolean'];
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
  active?: InputMaybe<Scalars['Boolean']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  customData?: InputMaybe<Scalars['JsonObject']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  isOptedIn?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  tenantId?: InputMaybe<Scalars['ID']>;
  timezone?: InputMaybe<Scalars['String']>;
  twoFactorEnabled?: InputMaybe<Scalars['Boolean']>;
};

export type UserUpdateProfileDto = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
};

export type UserValidateEmailTokenCreateDto = {
  userId: Scalars['String'];
};

export type UsersCountModel = {
  __typename?: 'UsersCountModel';
  totalCount: Scalars['Int'];
};

export type VerifyUserPhoneOtpResponseModel = {
  __typename?: 'VerifyUserPhoneOtpResponseModel';
  error?: Maybe<Scalars['String']>;
  isValid: Scalars['Boolean'];
  retryIn?: Maybe<Scalars['Int']>;
  totalTry: Scalars['Int'];
  totalTryRemain: Scalars['Int'];
};

export type WebhookConfigModel = {
  __typename?: 'WebhookConfigModel';
  active: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['Date']>;
  entityEnabledConfig?: Maybe<Scalars['JsonObject']>;
  id: Scalars['ID'];
  timeout?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Date']>;
  url: Scalars['String'];
  webhookKey: Scalars['String'];
};

export type WebhookConfigUpdateDto = {
  active?: InputMaybe<Scalars['Boolean']>;
  entityEnabledConfig?: InputMaybe<Scalars['JsonObject']>;
  timeout?: InputMaybe<Scalars['Int']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FileFragment = { __typename?: 'FileModel', id: string, createdAt: string, updatedAt: string, contentType: string, createdByUserId: string, fileCategoryId: string, isPublic: boolean, name: string, status: FileStatusEnum, url?: string | null };

export type FileAssociationFragment = { __typename?: 'FileAssociationModel', id: string, createdAt: string, updatedAt: string, entityReference: string, entityName: string, fileId: string };

export type FilesQueryVariables = Exact<{
  filter?: InputMaybe<FileFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<FileOrderArgType>;
  search?: InputMaybe<FileSearchArgType>;
  withCreatedByUser?: InputMaybe<Scalars['Boolean']>;
}>;


export type FilesQuery = { __typename?: 'Query', files: { __typename?: 'FilePageModel', totalCount: number, data: Array<{ __typename?: 'FileModel', id: string, createdAt: string, updatedAt: string, contentType: string, createdByUserId: string, fileCategoryId: string, isPublic: boolean, name: string, status: FileStatusEnum, url?: string | null, createdByUser?: { __typename?: 'UserModel', id: string, reference: string, firstName?: string | null, lastName?: string | null, active?: boolean | null, email: string, phone?: string | null, locale?: string | null, isOptedIn?: boolean | null, synced?: boolean | null, tenantId?: string | null, customData?: Record<string, unknown> | null, timezone?: string | null, avatarUrl?: string | null, createdAt: string, updatedAt: string } | null }> } };

export type FileQueryVariables = Exact<{
  id: Scalars['ID'];
  withCreatedByUser?: InputMaybe<Scalars['Boolean']>;
}>;


export type FileQuery = { __typename?: 'Query', file: { __typename?: 'FileModel', id: string, createdAt: string, updatedAt: string, contentType: string, createdByUserId: string, fileCategoryId: string, isPublic: boolean, name: string, status: FileStatusEnum, url?: string | null, createdByUser?: { __typename?: 'UserModel', id: string, reference: string, firstName?: string | null, lastName?: string | null, active?: boolean | null, email: string, phone?: string | null, locale?: string | null, isOptedIn?: boolean | null, synced?: boolean | null, tenantId?: string | null, customData?: Record<string, unknown> | null, timezone?: string | null, avatarUrl?: string | null, createdAt: string, updatedAt: string } | null } };

export type CreateFileAssociationMutationVariables = Exact<{
  data: FileAssociationCreateDto;
}>;


export type CreateFileAssociationMutation = { __typename?: 'Mutation', createFileAssociationV2: { __typename?: 'FileAssociationModel', id: string, createdAt: string, updatedAt: string, entityReference: string, entityName: string, fileId: string } };

export type CreateFileUploadMutationVariables = Exact<{
  data: FileCreateV2Dto;
}>;


export type CreateFileUploadMutation = { __typename?: 'Mutation', createFileUploadV2: { __typename?: 'FileCreateUploadModel', contentType: string, createdAt: string, createdByUserId: string, fileCategoryId: string, formFields: Record<string, unknown>, id: string, isPublic: boolean, name: string, status: FileStatusEnum, updatedAt: string, uploadUrl: string } };

export type DeleteFileAssociationsMutationVariables = Exact<{
  filter: FileAssociationBulkFilterArgType;
}>;


export type DeleteFileAssociationsMutation = { __typename?: 'Mutation', deleteFileAssociations: Array<string> };

export type DeleteFilesMutationVariables = Exact<{
  filter: DeleteFilterArgType;
}>;


export type DeleteFilesMutation = { __typename?: 'Mutation', deleteFiles: Array<string> };

export type MakeFilePrivateMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MakeFilePrivateMutation = { __typename?: 'Mutation', makeFilePrivate: { __typename?: 'FileModel', id: string, createdAt: string, updatedAt: string, contentType: string, createdByUserId: string, fileCategoryId: string, isPublic: boolean, name: string, status: FileStatusEnum, url?: string | null } };

export type MakeFilePublicMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MakeFilePublicMutation = { __typename?: 'Mutation', makeFilePublic: { __typename?: 'FileModel', id: string, createdAt: string, updatedAt: string, contentType: string, createdByUserId: string, fileCategoryId: string, isPublic: boolean, name: string, status: FileStatusEnum, url?: string | null } };

export type UpdateFileMutationVariables = Exact<{
  data: FileUpdateV2Dto;
}>;


export type UpdateFileMutation = { __typename?: 'Mutation', updateFileV2: { __typename?: 'FileModel', id: string, createdAt: string, updatedAt: string, contentType: string, createdByUserId: string, fileCategoryId: string, isPublic: boolean, name: string, status: FileStatusEnum, url?: string | null } };

export type UserFragment = { __typename?: 'UserModel', id: string, reference: string, firstName?: string | null, lastName?: string | null, active?: boolean | null, email: string, phone?: string | null, locale?: string | null, isOptedIn?: boolean | null, synced?: boolean | null, tenantId?: string | null, customData?: Record<string, unknown> | null, timezone?: string | null, avatarUrl?: string | null, createdAt: string, updatedAt: string };

export type TenantFragment = { __typename?: 'TenantModel', id: string, reference?: string | null, isDefault: boolean, name: string, createdAt: string, updatedAt: string };

export type UserGroupFragment = { __typename?: 'UserGroupModel', id: string, reference: string, name: string, type: string };

export type UserProfileFragment = { __typename?: 'UserProfileModel', id: string, reference: string, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, locale?: string | null, timezone?: string | null, avatarUrl?: string | null };

export type UserConnectedProviderFragment = { __typename?: 'UserConnectedProviderModel', id: string, name: string, authenticationProviderId: string };

export type UserGroupTypeFragment = { __typename?: 'UserGroupTypeModel', id: string, name: string, createdAt: string, updatedAt: string };

export type RoleFragment = { __typename?: 'RoleModel', id: string, reference?: string | null, description?: string | null, isSystemManaged: boolean, key: string, name: string };

export type UserInviteFragment = { __typename?: 'UserInviteModel', acceptedByUserId?: string | null, createdAt: string, createdByUserId: string, data?: Record<string, unknown> | null, email: string, firstName?: string | null, id: string, locale?: string | null, lastName?: string | null, roleKeys?: Array<string> | null, status: UserInviteStatusEnum, statusUpdatedAt?: string | null, tenantId?: string | null, updatedAt?: string | null, userTokenId: string };

export type UserProfileQueryVariables = Exact<{
  id: Scalars['ID'];
  withTenant?: InputMaybe<Scalars['Boolean']>;
  withUserGroups?: InputMaybe<Scalars['Boolean']>;
  withRoles?: InputMaybe<Scalars['Boolean']>;
}>;


export type UserProfileQuery = { __typename?: 'Query', user: { __typename?: 'UserModel', id: string, reference: string, firstName?: string | null, lastName?: string | null, active?: boolean | null, email: string, phone?: string | null, locale?: string | null, isOptedIn?: boolean | null, synced?: boolean | null, tenantId?: string | null, customData?: Record<string, unknown> | null, timezone?: string | null, avatarUrl?: string | null, createdAt: string, updatedAt: string, tenant?: { __typename?: 'TenantModel', id: string, reference?: string | null, isDefault: boolean, name: string, createdAt: string, updatedAt: string } | null, userGroups?: { __typename?: 'UserGroupPageModel', totalCount: number, data: Array<{ __typename?: 'UserGroupModel', id: string, reference: string, name: string, type: string }> } | null, roles?: { __typename?: 'RolePageModel', totalCount: number, data: Array<{ __typename?: 'RoleModel', id: string, reference?: string | null, description?: string | null, isSystemManaged: boolean, key: string, name: string }> } | null } };

export type UserProfilesQueryVariables = Exact<{
  filter?: InputMaybe<UserFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrderArgType>;
  search?: InputMaybe<UserSearchArgType>;
  withTenant?: InputMaybe<Scalars['Boolean']>;
  withUserGroups?: InputMaybe<Scalars['Boolean']>;
  withRoles?: InputMaybe<Scalars['Boolean']>;
}>;


export type UserProfilesQuery = { __typename?: 'Query', users: { __typename?: 'UserPageModel', totalCount: number, data: Array<{ __typename?: 'UserModel', id: string, reference: string, firstName?: string | null, lastName?: string | null, active?: boolean | null, email: string, phone?: string | null, locale?: string | null, isOptedIn?: boolean | null, synced?: boolean | null, tenantId?: string | null, customData?: Record<string, unknown> | null, timezone?: string | null, avatarUrl?: string | null, createdAt: string, updatedAt: string, tenant?: { __typename?: 'TenantModel', id: string, reference?: string | null, isDefault: boolean, name: string, createdAt: string, updatedAt: string } | null, userGroups?: { __typename?: 'UserGroupPageModel', totalCount: number, data: Array<{ __typename?: 'UserGroupModel', id: string, reference: string, name: string, type: string }> } | null, roles?: { __typename?: 'RolePageModel', totalCount: number, data: Array<{ __typename?: 'RoleModel', id: string, reference?: string | null, description?: string | null, isSystemManaged: boolean, key: string, name: string }> } | null }> } };

export type AssignRolesToUserMutationVariables = Exact<{
  roleKeys: Array<Scalars['String']> | Scalars['String'];
  userId: Scalars['ID'];
}>;


export type AssignRolesToUserMutation = { __typename?: 'Mutation', assignRolesToUser: boolean };

export type UpdateTenantMutationVariables = Exact<{
  id: Scalars['ID'];
  tenant: TenantUpdateDto;
}>;


export type UpdateTenantMutation = { __typename?: 'Mutation', updateTenant: { __typename?: 'TenantModel', id: string, reference?: string | null, isDefault: boolean, name: string, createdAt: string, updatedAt: string } };

export type CreateUserMutationVariables = Exact<{
  user: UserCreateDto;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserModel', id: string, reference: string, firstName?: string | null, lastName?: string | null, active?: boolean | null, email: string, phone?: string | null, locale?: string | null, isOptedIn?: boolean | null, synced?: boolean | null, tenantId?: string | null, customData?: Record<string, unknown> | null, timezone?: string | null, avatarUrl?: string | null, createdAt: string, updatedAt: string } };

export type UnassignRolesFromUserMutationVariables = Exact<{
  roleKeys: Array<Scalars['String']> | Scalars['String'];
  userId: Scalars['ID'];
}>;


export type UnassignRolesFromUserMutation = { __typename?: 'Mutation', unassignRolesFromUser: boolean };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID'];
  user: UserUpdateDto;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'UserModel', id: string, reference: string, firstName?: string | null, lastName?: string | null, active?: boolean | null, email: string, phone?: string | null, locale?: string | null, isOptedIn?: boolean | null, synced?: boolean | null, tenantId?: string | null, customData?: Record<string, unknown> | null, timezone?: string | null, avatarUrl?: string | null, createdAt: string, updatedAt: string } };

export type ChangeUserPasswordMutationVariables = Exact<{
  data: ChangeUserPasswordDto;
}>;


export type ChangeUserPasswordMutation = { __typename?: 'Mutation', changeUserPasswordV2: boolean };

export type VerifyPasswordMutationVariables = Exact<{
  password: Scalars['String'];
  userId: Scalars['ID'];
}>;


export type VerifyPasswordMutation = { __typename?: 'Mutation', verifyPassword: boolean };

export type SendUserInvitesMutationVariables = Exact<{
  data: UserInvitesCreateV2Dto;
}>;


export type SendUserInvitesMutation = { __typename?: 'Mutation', sendUserInvitesV2: { __typename?: 'CreateUserInvitesModel', success?: Array<{ __typename?: 'UserInviteModel', acceptedByUserId?: string | null, createdAt: string, createdByUserId: string, data?: Record<string, unknown> | null, email: string, firstName?: string | null, id: string, locale?: string | null, lastName?: string | null, roleKeys?: Array<string> | null, status: UserInviteStatusEnum, statusUpdatedAt?: string | null, tenantId?: string | null, updatedAt?: string | null, userTokenId: string }> | null, errors?: Array<{ __typename?: 'CreateUserInviteErrorModel', email: string, error: string, firstName: string, lastName: string }> | null } };

export type ResendUserInviteMutationVariables = Exact<{
  userInviteId: Scalars['ID'];
}>;


export type ResendUserInviteMutation = { __typename?: 'Mutation', resendUserInvite: { __typename?: 'UserInviteModel', acceptedByUserId?: string | null, createdAt: string, createdByUserId: string, data?: Record<string, unknown> | null, email: string, firstName?: string | null, id: string, locale?: string | null, lastName?: string | null, roleKeys?: Array<string> | null, status: UserInviteStatusEnum, statusUpdatedAt?: string | null, tenantId?: string | null, updatedAt?: string | null, userTokenId: string } };

export type UserInvitesQueryVariables = Exact<{
  filter?: InputMaybe<UserInviteFilterArgType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserInviteOrderArgType>;
  search?: InputMaybe<UserInviteSearchArgType>;
}>;


export type UserInvitesQuery = { __typename?: 'Query', userInvites: { __typename?: 'UserInvitePageModel', totalCount: number, data: Array<{ __typename?: 'UserInviteModel', acceptedByUserId?: string | null, createdAt: string, createdByUserId: string, data?: Record<string, unknown> | null, email: string, firstName?: string | null, id: string, locale?: string | null, lastName?: string | null, roleKeys?: Array<string> | null, status: UserInviteStatusEnum, statusUpdatedAt?: string | null, tenantId?: string | null, updatedAt?: string | null, userTokenId: string }> } };

export type UserInviteQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserInviteQuery = { __typename?: 'Query', userInvite: { __typename?: 'UserInviteModel', acceptedByUserId?: string | null, createdAt: string, createdByUserId: string, data?: Record<string, unknown> | null, email: string, firstName?: string | null, id: string, locale?: string | null, lastName?: string | null, roleKeys?: Array<string> | null, status: UserInviteStatusEnum, statusUpdatedAt?: string | null, tenantId?: string | null, updatedAt?: string | null, userTokenId: string } };

export type CancelUserInviteMutationVariables = Exact<{
  userInviteId: Scalars['ID'];
}>;


export type CancelUserInviteMutation = { __typename?: 'Mutation', cancelUserInvite: { __typename?: 'UserInviteModel', acceptedByUserId?: string | null, createdAt: string, createdByUserId: string, data?: Record<string, unknown> | null, email: string, firstName?: string | null, id: string, locale?: string | null, lastName?: string | null, roleKeys?: Array<string> | null, status: UserInviteStatusEnum, statusUpdatedAt?: string | null, tenantId?: string | null, updatedAt?: string | null, userTokenId: string } };

export type AcceptUserInviteMutationVariables = Exact<{
  data: AcceptUserInviteV2Dto;
}>;


export type AcceptUserInviteMutation = { __typename?: 'Mutation', acceptUserInviteV2: { __typename?: 'UserInviteModel', acceptedByUserId?: string | null, createdAt: string, createdByUserId: string, data?: Record<string, unknown> | null, email: string, firstName?: string | null, id: string, locale?: string | null, lastName?: string | null, roleKeys?: Array<string> | null, status: UserInviteStatusEnum, statusUpdatedAt?: string | null, tenantId?: string | null, updatedAt?: string | null, userTokenId: string } };

export type SendUserResetPasswordMailMutationVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type SendUserResetPasswordMailMutation = { __typename?: 'Mutation', sendUserResetPasswordMail: boolean };

export type SendMailMutationVariables = Exact<{
  mail: MailCreateDto;
}>;


export type SendMailMutation = { __typename?: 'Mutation', sendMail: { __typename?: 'MailCreateModel', mailsSent: { __typename?: 'MailCreateUserModel', count: number } } };

export const FileFragmentDoc = gql`
    fragment File on FileModel {
  id
  createdAt
  updatedAt
  contentType
  createdByUserId
  fileCategoryId
  isPublic
  name
  status
  url
}
    `;
export const FileAssociationFragmentDoc = gql`
    fragment FileAssociation on FileAssociationModel {
  id
  createdAt
  updatedAt
  entityReference
  entityName
  fileId
}
    `;
export const UserFragmentDoc = gql`
    fragment User on UserModel {
  id
  reference
  firstName
  lastName
  active
  email
  phone
  locale
  isOptedIn
  synced
  tenantId
  customData
  timezone
  avatarUrl
  createdAt
  updatedAt
}
    `;
export const TenantFragmentDoc = gql`
    fragment Tenant on TenantModel {
  id
  reference
  isDefault
  name
  createdAt
  updatedAt
}
    `;
export const UserGroupFragmentDoc = gql`
    fragment UserGroup on UserGroupModel {
  id
  reference
  name
  type
}
    `;
export const UserProfileFragmentDoc = gql`
    fragment UserProfile on UserProfileModel {
  id
  reference
  firstName
  lastName
  email
  phone
  locale
  timezone
  avatarUrl
}
    `;
export const UserConnectedProviderFragmentDoc = gql`
    fragment UserConnectedProvider on UserConnectedProviderModel {
  id
  name
  authenticationProviderId
}
    `;
export const UserGroupTypeFragmentDoc = gql`
    fragment UserGroupType on UserGroupTypeModel {
  id
  name
  createdAt
  updatedAt
}
    `;
export const RoleFragmentDoc = gql`
    fragment Role on RoleModel {
  id
  reference
  description
  isSystemManaged
  key
  name
  reference
}
    `;
export const UserInviteFragmentDoc = gql`
    fragment UserInvite on UserInviteModel {
  acceptedByUserId
  createdAt
  createdByUserId
  data
  email
  firstName
  id
  locale
  lastName
  roleKeys
  status
  statusUpdatedAt
  tenantId
  updatedAt
  userTokenId
}
    `;
export const FilesDocument = gql`
    query files($filter: FileFilterArgType, $limit: Int, $offset: Int, $order: FileOrderArgType, $search: FileSearchArgType, $withCreatedByUser: Boolean = false) {
  files(
    filter: $filter
    limit: $limit
    offset: $offset
    order: $order
    search: $search
  ) {
    data {
      ...File
      createdByUser @include(if: $withCreatedByUser) {
        ...User
      }
    }
    totalCount
  }
}
    ${FileFragmentDoc}
${UserFragmentDoc}`;
export const FileDocument = gql`
    query file($id: ID!, $withCreatedByUser: Boolean = false) {
  file(id: $id) {
    ...File
    createdByUser @include(if: $withCreatedByUser) {
      ...User
    }
  }
}
    ${FileFragmentDoc}
${UserFragmentDoc}`;
export const CreateFileAssociationDocument = gql`
    mutation createFileAssociation($data: FileAssociationCreateDto!) {
  createFileAssociationV2(data: $data) {
    ...FileAssociation
  }
}
    ${FileAssociationFragmentDoc}`;
export const CreateFileUploadDocument = gql`
    mutation createFileUpload($data: FileCreateV2Dto!) {
  createFileUploadV2(data: $data) {
    contentType
    createdAt
    createdByUserId
    fileCategoryId
    formFields
    id
    isPublic
    name
    status
    updatedAt
    uploadUrl
  }
}
    `;
export const DeleteFileAssociationsDocument = gql`
    mutation deleteFileAssociations($filter: FileAssociationBulkFilterArgType!) {
  deleteFileAssociations(filter: $filter)
}
    `;
export const DeleteFilesDocument = gql`
    mutation deleteFiles($filter: DeleteFilterArgType!) {
  deleteFiles(filter: $filter)
}
    `;
export const MakeFilePrivateDocument = gql`
    mutation makeFilePrivate($id: ID!) {
  makeFilePrivate(id: $id) {
    ...File
  }
}
    ${FileFragmentDoc}`;
export const MakeFilePublicDocument = gql`
    mutation makeFilePublic($id: ID!) {
  makeFilePublic(id: $id) {
    ...File
  }
}
    ${FileFragmentDoc}`;
export const UpdateFileDocument = gql`
    mutation updateFile($data: FileUpdateV2Dto!) {
  updateFileV2(data: $data) {
    ...File
  }
}
    ${FileFragmentDoc}`;
export const UserProfileDocument = gql`
    query userProfile($id: ID!, $withTenant: Boolean = false, $withUserGroups: Boolean = false, $withRoles: Boolean = false) {
  user(id: $id) {
    ...User
    tenant @include(if: $withTenant) {
      ...Tenant
    }
    userGroups @include(if: $withUserGroups) {
      data {
        ...UserGroup
      }
      totalCount
    }
    roles @include(if: $withRoles) {
      data {
        ...Role
      }
      totalCount
    }
  }
}
    ${UserFragmentDoc}
${TenantFragmentDoc}
${UserGroupFragmentDoc}
${RoleFragmentDoc}`;
export const UserProfilesDocument = gql`
    query userProfiles($filter: UserFilterArgType, $limit: Int, $offset: Int, $order: UserOrderArgType, $search: UserSearchArgType, $withTenant: Boolean = false, $withUserGroups: Boolean = false, $withRoles: Boolean = false) {
  users(
    filter: $filter
    limit: $limit
    offset: $offset
    order: $order
    search: $search
  ) {
    data {
      ...User
      tenant @include(if: $withTenant) {
        ...Tenant
      }
      userGroups @include(if: $withUserGroups) {
        data {
          ...UserGroup
        }
        totalCount
      }
      roles @include(if: $withRoles) {
        data {
          ...Role
        }
        totalCount
      }
    }
    totalCount
  }
}
    ${UserFragmentDoc}
${TenantFragmentDoc}
${UserGroupFragmentDoc}
${RoleFragmentDoc}`;
export const AssignRolesToUserDocument = gql`
    mutation assignRolesToUser($roleKeys: [String!]!, $userId: ID!) {
  assignRolesToUser(roleKeys: $roleKeys, userId: $userId)
}
    `;
export const UpdateTenantDocument = gql`
    mutation updateTenant($id: ID!, $tenant: TenantUpdateDto!) {
  updateTenant(id: $id, tenant: $tenant) {
    ...Tenant
  }
}
    ${TenantFragmentDoc}`;
export const CreateUserDocument = gql`
    mutation createUser($user: UserCreateDto!) {
  createUser(user: $user) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export const UnassignRolesFromUserDocument = gql`
    mutation unassignRolesFromUser($roleKeys: [String!]!, $userId: ID!) {
  unassignRolesFromUser(roleKeys: $roleKeys, userId: $userId)
}
    `;
export const UpdateUserDocument = gql`
    mutation updateUser($id: ID!, $user: UserUpdateDto!) {
  updateUser(id: $id, user: $user) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export const ChangeUserPasswordDocument = gql`
    mutation changeUserPassword($data: ChangeUserPasswordDto!) {
  changeUserPasswordV2(data: $data)
}
    `;
export const VerifyPasswordDocument = gql`
    mutation verifyPassword($password: String!, $userId: ID!) {
  verifyPassword(password: $password, userId: $userId)
}
    `;
export const SendUserInvitesDocument = gql`
    mutation sendUserInvites($data: UserInvitesCreateV2Dto!) {
  sendUserInvitesV2(data: $data) {
    success {
      ...UserInvite
    }
    errors {
      email
      error
      firstName
      lastName
    }
  }
}
    ${UserInviteFragmentDoc}`;
export const ResendUserInviteDocument = gql`
    mutation resendUserInvite($userInviteId: ID!) {
  resendUserInvite(id: $userInviteId) {
    ...UserInvite
  }
}
    ${UserInviteFragmentDoc}`;
export const UserInvitesDocument = gql`
    query userInvites($filter: UserInviteFilterArgType, $limit: Int, $offset: Int, $order: UserInviteOrderArgType, $search: UserInviteSearchArgType) {
  userInvites(
    filter: $filter
    limit: $limit
    offset: $offset
    order: $order
    search: $search
  ) {
    data {
      ...UserInvite
    }
    totalCount
  }
}
    ${UserInviteFragmentDoc}`;
export const UserInviteDocument = gql`
    query userInvite($id: ID!) {
  userInvite(id: $id) {
    ...UserInvite
  }
}
    ${UserInviteFragmentDoc}`;
export const CancelUserInviteDocument = gql`
    mutation cancelUserInvite($userInviteId: ID!) {
  cancelUserInvite(id: $userInviteId) {
    ...UserInvite
  }
}
    ${UserInviteFragmentDoc}`;
export const AcceptUserInviteDocument = gql`
    mutation acceptUserInvite($data: AcceptUserInviteV2Dto!) {
  acceptUserInviteV2(data: $data) {
    ...UserInvite
  }
}
    ${UserInviteFragmentDoc}`;
export const SendUserResetPasswordMailDocument = gql`
    mutation sendUserResetPasswordMail($userId: ID!) {
  sendUserResetPasswordMail(userId: $userId)
}
    `;
export const SendMailDocument = gql`
    mutation sendMail($mail: MailCreateDto!) {
  sendMail(mail: $mail) {
    mailsSent {
      count
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    files(variables?: FilesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FilesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FilesQuery>(FilesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'files', 'query');
    },
    file(variables: FileQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FileQuery>(FileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'file', 'query');
    },
    createFileAssociation(variables: CreateFileAssociationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateFileAssociationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateFileAssociationMutation>(CreateFileAssociationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createFileAssociation', 'mutation');
    },
    createFileUpload(variables: CreateFileUploadMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateFileUploadMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateFileUploadMutation>(CreateFileUploadDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createFileUpload', 'mutation');
    },
    deleteFileAssociations(variables: DeleteFileAssociationsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteFileAssociationsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteFileAssociationsMutation>(DeleteFileAssociationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteFileAssociations', 'mutation');
    },
    deleteFiles(variables: DeleteFilesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteFilesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteFilesMutation>(DeleteFilesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteFiles', 'mutation');
    },
    makeFilePrivate(variables: MakeFilePrivateMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MakeFilePrivateMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MakeFilePrivateMutation>(MakeFilePrivateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'makeFilePrivate', 'mutation');
    },
    makeFilePublic(variables: MakeFilePublicMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MakeFilePublicMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MakeFilePublicMutation>(MakeFilePublicDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'makeFilePublic', 'mutation');
    },
    updateFile(variables: UpdateFileMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateFileMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateFileMutation>(UpdateFileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateFile', 'mutation');
    },
    userProfile(variables: UserProfileQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserProfileQuery>(UserProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userProfile', 'query');
    },
    userProfiles(variables?: UserProfilesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserProfilesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserProfilesQuery>(UserProfilesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userProfiles', 'query');
    },
    assignRolesToUser(variables: AssignRolesToUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AssignRolesToUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AssignRolesToUserMutation>(AssignRolesToUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'assignRolesToUser', 'mutation');
    },
    updateTenant(variables: UpdateTenantMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateTenantMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateTenantMutation>(UpdateTenantDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateTenant', 'mutation');
    },
    createUser(variables: CreateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUser', 'mutation');
    },
    unassignRolesFromUser(variables: UnassignRolesFromUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UnassignRolesFromUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UnassignRolesFromUserMutation>(UnassignRolesFromUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'unassignRolesFromUser', 'mutation');
    },
    updateUser(variables: UpdateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserMutation>(UpdateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUser', 'mutation');
    },
    changeUserPassword(variables: ChangeUserPasswordMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ChangeUserPasswordMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ChangeUserPasswordMutation>(ChangeUserPasswordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'changeUserPassword', 'mutation');
    },
    verifyPassword(variables: VerifyPasswordMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<VerifyPasswordMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<VerifyPasswordMutation>(VerifyPasswordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'verifyPassword', 'mutation');
    },
    sendUserInvites(variables: SendUserInvitesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SendUserInvitesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SendUserInvitesMutation>(SendUserInvitesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sendUserInvites', 'mutation');
    },
    resendUserInvite(variables: ResendUserInviteMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ResendUserInviteMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ResendUserInviteMutation>(ResendUserInviteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'resendUserInvite', 'mutation');
    },
    userInvites(variables?: UserInvitesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserInvitesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserInvitesQuery>(UserInvitesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userInvites', 'query');
    },
    userInvite(variables: UserInviteQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserInviteQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserInviteQuery>(UserInviteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userInvite', 'query');
    },
    cancelUserInvite(variables: CancelUserInviteMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CancelUserInviteMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CancelUserInviteMutation>(CancelUserInviteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'cancelUserInvite', 'mutation');
    },
    acceptUserInvite(variables: AcceptUserInviteMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AcceptUserInviteMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AcceptUserInviteMutation>(AcceptUserInviteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'acceptUserInvite', 'mutation');
    },
    sendUserResetPasswordMail(variables: SendUserResetPasswordMailMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SendUserResetPasswordMailMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SendUserResetPasswordMailMutation>(SendUserResetPasswordMailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sendUserResetPasswordMail', 'mutation');
    },
    sendMail(variables: SendMailMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SendMailMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SendMailMutation>(SendMailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sendMail', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;