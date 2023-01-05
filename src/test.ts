import { PlatformClientService } from './platformClient/services/platform-client.service';
const client = new PlatformClientService({
  environmentId: '7f38679d-fba9-4027-8b1d-7649a33f044d',
  apiKey: '5acb56db-4467-4bac-aada-9bbe115f9d4e',
  jwtSecret: 'CHANGE_ME_2',
  host: 'https://mars-pp.roq-platform.com',
});

client
  .asSuperAdmin()
  .users()
  .then((res) => console.log(res.users.data));

client
  .asUser('a5b9d126-b239-4961-85f5-e5e11283bef8')
  .userProfile({ id: 'a5b9d126-b239-4961-85f5-e5e11283bef8' })
  .then((res) => console.log(res.userProfile));
