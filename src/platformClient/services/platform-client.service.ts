import { defaultGraphqlEndpoint, defaultHost } from '../../constants';
import { PlatformClientOptionsType } from '../types/platform-client-options.type';
import { AuthorizationClientService } from '../../authorizationClient';
import { getSdk } from '../../generated/sdk';
import { ClientError, GraphQLClient } from 'graphql-request';
import { UserClientService } from '../../userClient';
import { Response, Variables } from 'graphql-request/src/types';
import * as Dom from 'graphql-request/dist/types.dom';
import { FileClientService } from '../../fileClient';
import { HttpException } from '../../exception/exceptions/http.exception';

const base64UrlDecode = (str: string ) => {
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  while (str.length % 4) {
      str += '=';
  }
  return Buffer.from(str, 'base64').toString();
}
const decodeJWT = (jwt: string) => {
  if(!jwt) {
    throw new Error('ROQ Platform Authorization is required')
  }
  const parts = jwt.split('.');
  if (parts.length !== 3) {
    throw new Error('The JWT is not correctly formatted');
  }
  const header = JSON.parse(base64UrlDecode(parts[0]));
  const payload = JSON.parse(base64UrlDecode(parts[1]));
  const signature = parts[2];

  return {
    header,
    payload,
    signature
  };
}

export class PlatformClientService {
  private readonly graphqlUrl: string;
  private readonly host: string;
  private readonly apiKey: string;
  private readonly environmentId: string;
  private readonly webhookKey: string;
  private readonly graphqlClient: GraphQLClient;

  public readonly authorization: AuthorizationClientService;

  constructor(options: PlatformClientOptionsType) {
    this.environmentId = options.environmentId;
    this.apiKey = options.apiKey;
    this.graphqlUrl = options.host + defaultGraphqlEndpoint;
    this.host = options.host;
    this.webhookKey = options.webhookKey;
    this.graphqlClient = new GraphQLClient(this.graphqlUrl);

    this.authorization = new AuthorizationClientService(options);
  }

  public verifyWebhookHeader(webhookHeader: string) {
    return webhookHeader === this.webhookKey;
  }

  public asUser(userId: string, expiresIn?: string) {
    return this.initialise(() => this.authorization.createUserToken(userId, expiresIn));
  }

  public withBaasToken(token: string) {
    const { payload } = decodeJWT(token)
    return this.initialise(() => Promise.resolve(payload?.roqAccessToken));
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
      ...new UserClientService(sdk),
      ...new FileClientService(sdk),
      graphqlRequest,
    };
  }
}
