import { PlatformClientService } from './platformClient/services/platform-client.service';
const client = new PlatformClientService({ tenantId: 'CHANGE_ME_2', apiKey: 'CHANGE_ME_2', jwtSecret: 'CHANGE_ME_2' });

client.notifications
  .createNotification({
    notificationData: { entities: [], key: 'some', recipients: { allUsers: true } },
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
