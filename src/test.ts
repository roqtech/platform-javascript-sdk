import { PlatformClientService } from './platformClient/services/platform-client.service';
const client = new PlatformClientService({
  environmentId: '7f38679d-fba9-4027-8b1d-7649a33f044d',
  apiKey: '5acb56db-4467-4bac-aada-9bbe115f9d4e',
  jwtSecret: 'CHANGE_ME_2',
  host: 'https://mars-pp.roq-platform.com',
});

client.file
  .fileCategoryContentGroups({})
  .then((response) => {
    response.fileCategoryContentGroups.data.map((value) => {
      value.fileCategoryContentTypes.data.map((v) => {
        console.log(v);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });
