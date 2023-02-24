import { Sdk } from '../../generated/sdk';

export class ChatClientService {
  private gqlSdk: Sdk;
  public createConversation: Sdk['createConversation'];
  public deleteConversation: Sdk['deleteConversation'];
  public assignTagsToConversation: Sdk['assignTagsToConversation'];
  public unassignTagsFromConversation: Sdk['unassignTagsFromConversation'];

  constructor(gqlSdk: Sdk) {
    this.gqlSdk = gqlSdk;
    this.createConversation = this.gqlSdk.createConversation;
    this.deleteConversation = this.gqlSdk.deleteConversation;
    this.assignTagsToConversation = this.gqlSdk.assignTagsToConversation;
    this.unassignTagsFromConversation = this.gqlSdk.unassignTagsFromConversation;
  }
}
