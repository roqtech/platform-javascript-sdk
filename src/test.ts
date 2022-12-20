import { PlatformClientService } from './platformClient/services/platform-client.service';
const client = new PlatformClientService({ environmentId: 'CHANGE_ME_2', apiKey: 'CHANGE_ME_2', jwtSecret: 'CHANGE_ME_2' });

client.notifications
  .notify({
    notification: { key: 'some', recipients: { allUsers: true } },
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
