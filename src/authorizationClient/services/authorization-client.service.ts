import { decode, JwtPayload } from 'jsonwebtoken';
import * as NodeCache from 'node-cache';
import fetch from 'node-fetch';
import {
  defaultCreateTokenEndpoint,
  defaultHost,
  defaultServiceAccountEmail,
  defaultUserTokenEndpoint,
} from '../../constants';
import { PlatformClientOptionsType } from '../../platformClient/types/platform-client-options.type';
import { RequestParamsType } from '../types';

export class AuthorizationClientService {
  private readonly host: string;
  private readonly jwtSecret: string;
  private readonly apiKey: string;
  private readonly environmentId: string;
  private readonly serviceAccountEmail = defaultServiceAccountEmail;
  private cache: NodeCache;

  constructor(options: PlatformClientOptionsType) {
    const stdTTL = options.cacheTtlInSeconds ? options.cacheTtlInSeconds : 60 * 60;
    this.cache = new NodeCache({ stdTTL });
    this.jwtSecret = options.jwtSecret;
    this.environmentId = options.environmentId;
    this.apiKey = options.apiKey;
    if (options.host) {
      this.host = options.host;
    } else {
      this.host = defaultHost;
    }
  }

  public async createServiceAccountToken(): Promise<string> {
    const token = this.getCachedToken(this.serviceAccountEmail);
    if (token) {
      return token;
    } else {
      const { accessToken } = await this.request({
        endpoint: defaultCreateTokenEndpoint,
        method: 'POST',
        body: { email: this.serviceAccountEmail, environmentId: this.environmentId, apiKey: this.apiKey },
      });
      this.cacheToken(this.serviceAccountEmail, accessToken);
      return accessToken;
    }
  }

  public async createUserToken(userId: string, expiresIn?: string): Promise<string> {
    const serviceToken = await this.createServiceAccountToken();
    let token = this.getCachedToken(userId);
    if (token) {
      return token;
    } else {
      const token = await this.request({
        endpoint: defaultUserTokenEndpoint,
        method: 'POST',
        headers: {
          'roq-platform-authorization': `Bearer ${serviceToken}`,
        },
        body: {
          environmentId: this.environmentId,
          apiKey: this.apiKey,
          userId,
          expiresIn,
        },
      });
      this.cacheToken(userId, token?.accessToken);
      return token?.accessToken;
    }
  }

  private getCachedToken(identifier: string): string {
    let token = this.cache.get<string>(identifier);
    if (token) {
      const { exp } = decode(token) as JwtPayload;
      if (Date.now() >= exp * 1000) {
        return null;
      }
    } else {
      return null;
    }
    return token;
  }

  private cacheToken(identifier: string, token: string) {
    this.cache.set(identifier, token);
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
