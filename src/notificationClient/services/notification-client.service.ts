import { Sdk } from '../../generated/sdk';

export class NotificationClientService {
  private gqlSdk: Sdk;
  public notify: Sdk['notify'];

  constructor(gqlSdk: Sdk) {
    this.gqlSdk = gqlSdk;
    this.notify = this.gqlSdk.notify;
  }
}
