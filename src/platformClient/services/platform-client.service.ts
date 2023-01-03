import { defaultGraphqlEndpoint, defaultHost } from '../../constants';
import { PlatformClientOptionsType } from '../types/platform-client-options.type';
import { NotificationClientService } from '../../notificationClient/services/notification-client.service';
import { AuthorisationClientService } from '../../authorisationClient';
import { getSdk } from '../../generated/sdk';
import { GraphQLClient } from 'graphql-request';
import { UserClientService } from '../../userClient';
import { Response, Variables } from 'graphql-request/src/types';
import * as Dom from 'graphql-request/dist/types.dom';
import {FileClientService} from "../../fileClient";
import {TranslationClientService} from "../../translationClient/services/translation-client.service";

export class PlatformClientService {
  private readonly graphqlUrl: string;
  private readonly host: string;
  private readonly jwtSecret: string;
  private readonly apiKey: string;
  private readonly environmentId: string;
  private readonly graphqlClient: GraphQLClient;

  public readonly authorisation: AuthorisationClientService;
  public readonly notifications: NotificationClientService;
  public readonly file: FileClientService;
  public readonly user: UserClientService;
  public readonly translation: TranslationClientService;
  public graphqlRequest: <T = any, V = Variables>(
    query: string,
    variables?: V,
    requestHeaders?: Dom.RequestInit['headers'],
  ) => Promise<Response<T>>;

  constructor(options: PlatformClientOptionsType) {
    this.jwtSecret = options.jwtSecret;
    this.environmentId = options.environmentId;
    this.apiKey = options.apiKey;
    if (options.host) {
      this.graphqlUrl = options.host + defaultGraphqlEndpoint;
      this.host = options.host;
    } else {
      this.graphqlUrl = defaultHost + '/v01/server/graphql';
      this.host = defaultHost;
    }
    this.graphqlClient = new GraphQLClient(this.graphqlUrl);

    this.authorisation = new AuthorisationClientService(options);

    const initialised = this.initialise(this.authorisation.getToken.bind(this.authorisation));

    this.notifications = initialised.notifications;
    this.user = initialised.user;
    this.file = initialised.file;
    this.translation = initialised.translation;
    this.graphqlRequest = initialised.graphqlRequest;
  }

  public async withToken(token: string) {
    return this.initialise(() => {
      return Promise.resolve(token);
    });
  }

  private initialise(getToken: () => Promise<string>) {

    const getAuthorizedHeaders = (token: string): Record<string, string> => {
      const headers = {
        'roq-platform-authorization': `Bearer ${token}`,
      };
      return headers;
    };

    const sdkWrapper = async (action, _operationName, _operationType) => {
      const token = await getToken();
      const authorizedHeaders = getAuthorizedHeaders(token);
      return action(authorizedHeaders);
    };
    const sdk = getSdk(this.graphqlClient, sdkWrapper);

    const graphqlRequest = async <T = any, V = Variables>(
      query: string,
      variables?: V,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<Response<T>> => {
      const token = await getToken();
      const authorizedHeaders = getAuthorizedHeaders(token);
      return this.graphqlClient.rawRequest(query, variables, {
        ...requestHeaders,
        ...authorizedHeaders,
      });
    };

    return {
      notifications: new NotificationClientService(sdk),
      user: new UserClientService(sdk),
      file: new FileClientService(sdk),
      translation: new TranslationClientService(sdk),
      graphqlRequest,
    };
  }
}
