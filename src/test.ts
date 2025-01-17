import { PlatformClientService } from './platformClient/services/platform-client.service';
const client = new PlatformClientService({
  environmentId: '38487fe5-5260-4f1f-8786-2ba534296739',
  apiKey: '080cc01b-0142-4e34-af0e-2997d19b4546',
  host: 'https://mars-pp.roq-platform.com',
});

client
  .asSuperAdmin()
  .createUser({
    user: {
      email: 'savin23jerewewenj@gmail.com',
      firstName: 'some',
      lastName: 'some',
      reference: '123'
    },
  })
  .then(async (response) => {
    console.log(response);
    try {
      const user2 = await client.asSuperAdmin().createUser({
        user: {
          email: 'saviniirweeeweri@gmail.com',
          firstName: 'some',
          lastName: 'some',
          reference: '123',
        },
      });
      console.log(user2);
    } catch (err) {
      console.log(err);
    }
  })
  .catch((err) => {
    console.log(err);
  });
