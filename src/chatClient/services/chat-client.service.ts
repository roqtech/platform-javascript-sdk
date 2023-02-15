import { Sdk } from '../../generated/sdk';

export class ChatClientService {
  private gqlSdk: Sdk;
  public createConversation: Sdk['createConversation'];
  public deleteConversation: Sdk['deleteConversation'];

  constructor(gqlSdk: Sdk) {
    this.gqlSdk = gqlSdk;
    this.createConversation = this.gqlSdk.createConversation;
    this.deleteConversation = this.gqlSdk.deleteConversation;
  }
}
