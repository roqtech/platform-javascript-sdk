import { PlatformClientService } from './platformClient/services/platform-client.service';
const client = new PlatformClientService({
  environmentId: 'a9c00c15-ce8b-4a46-862e-3fd9114eafc9',
  apiKey: '46f91f7b-4dae-4426-8b8c-09d542ea3380',
  host: 'https://roq-test02.osc-fr1.scalingo.io',
});

client
  .asSuperAdmin()
  .createUser({
    user: {
      email: 'savin@gmail.com',
      firstName: 'some',
      lastName: 'some',
      reference: '123',
    },
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
