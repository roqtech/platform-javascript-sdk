import { PlatformClientService } from '../../platformClient/services/platform-client.service';

export class NotificationClientService {
  private client: PlatformClientService;
  constructor(client: PlatformClientService) {
    this.client = client;
  }
}
