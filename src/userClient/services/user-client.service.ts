import { Sdk } from '../../generated/sdk';

export class UserClientService {
  private gqlSdk: Sdk;
  public createUser: Sdk['createUser'];

  constructor(gqlSdk: Sdk) {
    this.gqlSdk = gqlSdk;
    this.createUser = this.gqlSdk.createUser;
  }
}
