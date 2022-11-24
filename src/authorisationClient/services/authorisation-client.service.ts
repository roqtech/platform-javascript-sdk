import { decode, JwtPayload } from 'jsonwebtoken';
import fetch from 'node-fetch';
import {
  defaultCreateTokenEndpoint,
  defaultHost,
  defaultServiceAccountEmail,
  defaultUserTokenEndpoint
} from '../../constants';
import { PlatformClientOptionsType } from '../../platformClient/types/platform-client-options.type';
import { RequestParamsType } from '../types/request-params.type';

export class AuthorisationClientService {
  private readonly host: string;
  private readonly jwtSecret: string;
  private readonly apiKey: string;
  private readonly tenantId: string;
  private readonly tokenStorage: Record<string, string> = {};
  private readonly serviceAccountEmail = defaultServiceAccountEmail;

  constructor(options: PlatformClientOptionsType) {
    this.jwtSecret = options.jwtSecret;
    this.tenantId = options.tenantId;
    this.apiKey = options.apiKey;
    if (options.host) {
      this.host = options.host;
    } else {
      this.host = defaultHost;
    }
  }

  private async createToken(email: string): Promise<string> {
    const { accessToken } = await this.request({
      endpoint: defaultCreateTokenEndpoint,
      method: 'POST',
      body: { email, tenantId: this.tenantId, apiKey: this.apiKey },
    });

    this.tokenStorage[email] = accessToken;
    return accessToken;
  }

  async createUserToken(userReference: string, expiresIn?: string): Promise<string> {
    const token = await this.request({
      endpoint: defaultUserTokenEndpoint,
      method: 'POST',
      body: { userReference, expiresIn },
    });
    return token?.accessToken;
  }

  public async getToken(email?: string): Promise<string> {
    const internalEmail = email ? email : this.serviceAccountEmail;
    let token = this.tokenStorage[internalEmail];
    if (token) {
      const { exp } = decode(token) as JwtPayload;
      if (Date.now() >= exp * 1000) {
        token = await this.createToken(internalEmail);
      }
    } else {
      token = await this.createToken(internalEmail);
    }
    return token;
  }

  private async request({ endpoint, body, headers, method }: RequestParamsType): Promise<any> {
    const fetchResult = await fetch(this.host + endpoint, {
      method,
      headers: {
        ...headers,
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return fetchResult.json().then((json) => {
      return json || null;
    });
  }
}
