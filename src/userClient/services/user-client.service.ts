import { Sdk } from '../../generated/sdk';

export class UserClientService {
  private gqlSdk: Sdk;
  public createUser: Sdk['createUser'];
  public updateUser: Sdk['updateUser'];

  constructor(gqlSdk: Sdk) {
    this.gqlSdk = gqlSdk;
    this.createUser = this.gqlSdk.createUser;
    this.updateUser = this.gqlSdk.updateUser;
  }
}
