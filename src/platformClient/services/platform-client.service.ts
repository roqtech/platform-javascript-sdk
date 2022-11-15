import { decode } from 'jsonwebtoken';
import { ExceptionMappingType } from '../../exception/types/exception-mapping.type';
import { ErrorCodeEnum } from '../enums/error-code.enum';
import { HttpException } from '../../exception/exceptions/http.exception';
import {
  defaultCreateTokenEndpoint,
  defaultGraphqlEndpoint,
  defaultHost,
  defaultServiceAccountEmail,
} from '../constants';
import { NotificationClientService } from '../../notificationClient/services/notification-client.service';

export class PlatformClientService {
  private readonly graphqlUrl: string;
  private readonly host: string;
  private readonly jwtSecret: string;
  private readonly apiKey: string;
  private readonly tenantId: string;
  private readonly tokenStorage: Record<string, string>;
  private readonly serviceAccountEmail = defaultServiceAccountEmail;
  public readonly notifications: NotificationClientService;

  constructor(options: PlatformClientOptionsType) {
    this.jwtSecret = options.jwtSecret;
    this.tenantId = options.tenantId;
    this.apiKey = options.apiKey;
    if (options.host) {
      this.graphqlUrl = options.host + defaultGraphqlEndpoint;
      this.host = options.host;
    } else {
      this.graphqlUrl = defaultHost + '/v01/server/graphql';
      this.host = defaultHost;
    }
    this.notifications = new NotificationClientService(this);
  }

  private static exceptionMapping: ExceptionMappingType = {
    [ErrorCodeEnum.FORBIDDEN]: HttpException,
    [ErrorCodeEnum.UNAUTHORIZED_EXCEPTION]: HttpException,
  };

  static parseException(e: Error): HttpException {
    return e;
  }

  private async createToken(email: string): Promise<string> {
    const token = await this.request({
      endpoint: defaultCreateTokenEndpoint,
      method: 'POST',
      body: { email, tenantId: this.tenantId, apiKey: this.apiKey },
    });
    this.tokenStorage[email] = token;
    return token;
  }

  public async getToken(email?: string): Promise<string> {
    const internalEmail = email ? email : this.serviceAccountEmail;
    let token = this.tokenStorage[internalEmail];
    if (token) {
      const { exp } = decode(token);
      if (Date.now() >= exp * 1000) {
        token = await this.createToken(internalEmail);
      }
    } else {
      token = await this.createToken(internalEmail);
    }
    return token;
  }

  public async gqlRequest({ query, variables, headers, resultField }: GqlRequestParamsType): Promise<any> {
    const token = await this.getToken();
    const fetchResult = await fetch(this.graphqlUrl, {
      method: 'POST',
      headers: {
        ...headers,
        'content-type': 'application/json',
        'roq-platform-authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    return fetchResult.json().then((json) => {
      if (json?.errors?.[0]) {
        throw PlatformClientService.parseException(json?.errors[0]);
      }
      return json?.data?.[resultField] || null;
    });
  }

  public async request({ endpoint, body, headers, method }: RequestParamsType): Promise<any> {
    const token = await this.getToken();
    const fetchResult = await fetch(this.host + endpoint, {
      method,
      headers: {
        ...headers,
        'content-type': 'application/json',
        'roq-platform-authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    return fetchResult.json().then((json) => {
      return json || null;
    });
  }
}
