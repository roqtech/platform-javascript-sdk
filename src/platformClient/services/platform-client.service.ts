import { defaultGraphqlEndpoint, defaultHost } from '../../constants';
import { PlatformClientOptionsType } from '../types/platform-client-options.type';
import { NotificationClientService } from '../../notificationClient/services/notification-client.service';
import { AuthorizationClientService } from '../../authorizationClient';
import { getSdk } from '../../generated/sdk';
import { ClientError, GraphQLClient } from 'graphql-request';
import { UserClientService } from '../../userClient';
import { Response, Variables } from 'graphql-request/src/types';
import * as Dom from 'graphql-request/dist/types.dom';
import { FileClientService } from '../../fileClient';
import { TranslationClientService } from '../../translationClient/services/translation-client.service';
import { HttpException } from '../../exception/exceptions/http.exception';

export class PlatformClientService {
  private readonly graphqlUrl: string;
  private readonly host: string;
  private readonly apiKey: string;
  private readonly environmentId: string;
  private readonly graphqlClient: GraphQLClient;

  public readonly authorization: AuthorizationClientService;

  constructor(options: PlatformClientOptionsType) {
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

    this.authorization = new AuthorizationClientService(options);
  }

  public asUser(userId: string, expiresIn?: string) {
    return this.initialise(() => this.authorization.createUserToken(userId, expiresIn));
  }

  public asSuperAdmin() {
    return this.initialise(() => this.authorization.createServiceAccountToken());
  }

  private initialise(getToken: () => Promise<string>) {
    const getAuthorizedHeaders = (token: string): Record<string, string> => {
      const headers = {
        'roq-platform-authorization': `Bearer ${token}`,
        'roq-platform-server-authorization': `Basic ${Buffer.from(`${this.environmentId}:${this.apiKey}`).toString(
          'base64',
        )}`,
      };
      return headers;
    };

    const handleError = (error: ClientError) => {
      if (error && error?.message && error?.response?.errors?.[0]?.extensions) {
        const response = error?.response?.errors?.[0]?.extensions.response as any;
        if (response && response?.statusCode && response?.errorCode) {
          throw new HttpException(response.message, response?.statusCode, response?.errorCode);
        } else {
          throw error;
        }
      } else {
        throw error;
      }
    };

    const sdkWrapper = async (action, _operationName, _operationType) => {
      const token = await getToken();
      const authorizedHeaders = getAuthorizedHeaders(token);
      try {
        const response = await action(authorizedHeaders);
        return response;
      } catch (err) {
        return handleError(err);
      }
    };
    const sdk = getSdk(this.graphqlClient, sdkWrapper);

    const graphqlRequest = async <T = any, V = Variables>(
      query: string,
      variables?: V,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<Response<T>> => {
      const token = await getToken();
      const authorizedHeaders = getAuthorizedHeaders(token);
      try {
        const response = await this.graphqlClient.rawRequest(query, variables, {
          ...requestHeaders,
          ...authorizedHeaders,
        });
        return response;
      } catch (err) {
        handleError(err);
      }
    };

    return {
      ...new NotificationClientService(sdk),
      ...new UserClientService(sdk),
      ...new FileClientService(sdk),
      ...new TranslationClientService(sdk),
      graphqlRequest,
    };
  }
}
