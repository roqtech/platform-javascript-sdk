import { Sdk } from '../../generated/sdk';

export class NotificationClientService {
  private gqlSdk: Sdk;
  public notificationPreference: Sdk['notificationPreference'];
  public notifications: Sdk['notifications'];
  public markNotifications: Sdk['markNotifications'];
  public notify: Sdk['notify'];
  public updateNotificationPreference: Sdk['updateNotificationPreference'];
  public sendMail: Sdk['sendMail'];

  constructor(gqlSdk: Sdk) {
    this.gqlSdk = gqlSdk;
    this.notificationPreference = this.gqlSdk.notificationPreference;
    this.notifications = this.gqlSdk.notifications;
    this.markNotifications = this.gqlSdk.markNotifications;
    this.notify = this.gqlSdk.notify;
    this.updateNotificationPreference = this.gqlSdk.updateNotificationPreference;
    this.sendMail = this.gqlSdk.sendMail;
  }
}
