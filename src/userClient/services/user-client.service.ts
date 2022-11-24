import { Sdk } from '../../generated/sdk';

export class UserClientService {
  private gqlSdk: Sdk;
  public addUser: Sdk['addUser'];

  constructor(gqlSdk: Sdk) {
    this.gqlSdk = gqlSdk;
    this.addUser = this.gqlSdk.addUser;
  }
}
