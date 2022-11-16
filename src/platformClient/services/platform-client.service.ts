import { defaultGraphqlEndpoint, defaultHost } from '../../constants';
import { PlatformClientOptionsType } from '../types/platform-client-options.type';
import { NotificationClientService } from '../../notificationClient/services/notification-client.service';
import { AuthorisationClientService } from '../../authorisationClient/services/authorisation-client.service';
import { getSdk, Sdk, SdkFunctionWrapper } from '../../generated/sdk';
import { GraphQLClient } from 'graphql-request';

export class PlatformClientService {
  private readonly graphqlUrl: string;
  private readonly host: string;
  private readonly jwtSecret: string;
  private readonly apiKey: string;
  private readonly tenantId: string;
  public readonly authorisation: AuthorisationClientService;
  public readonly notifications: NotificationClientService;
  private readonly gqlSdk: Sdk;

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
    this.authorisation = new AuthorisationClientService(options);
    this.gqlSdk = getSdk(new GraphQLClient(this.graphqlUrl), this.sdkWrapper);
    this.notifications = new NotificationClientService(this.gqlSdk);
  }

  private sdkWrapper: SdkFunctionWrapper = async (action, _operationName, _operationType) => {
    const token = await this.authorisation.getToken();
    const headers = {
      'roq-platform-authorization': `Bearer ${token}`,
    };
    return action(headers);
  };
}
