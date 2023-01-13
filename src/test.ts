import { PlatformClientService } from './platformClient/services/platform-client.service';
const client = new PlatformClientService({
  environmentId: 'CHANGE_ME_2',
  apiKey: 'CHANGE_ME_2',
  host: 'http://localhost:3002',
});

client
  .asSuperAdmin()
  .translations()
  .then((res) => console.log(res.translations.data));
