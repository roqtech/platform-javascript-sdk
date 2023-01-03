import { Sdk } from '../../generated/sdk';

export class TranslationClientService {
  private gqlSdk: Sdk;
  public translation: Sdk['translation'];
  public translations: Sdk['translations'];
  public translationKey: Sdk['translationKey'];
  public translationKeys: Sdk['translationKeys'];

  constructor(gqlSdk: Sdk) {
    this.gqlSdk = gqlSdk;
    this.translation = this.gqlSdk.translation;
    this.translations = this.gqlSdk.translations;
    this.translationKey = this.gqlSdk.translationKey;
    this.translationKeys = this.gqlSdk.translationKeys;
  }
}
