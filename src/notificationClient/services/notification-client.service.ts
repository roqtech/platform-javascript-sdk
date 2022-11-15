import { Sdk } from '../../generated/sdk';

export class NotificationClientService {
  private gqlSdk: Sdk;
  public createNotification: Sdk['createNotification'];

  constructor(gqlSdk: Sdk) {
    this.gqlSdk = gqlSdk;
    this.createNotification = this.gqlSdk.createNotification;
  }
}
