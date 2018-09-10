import { CoreUsersModule } from './users.module';

describe('UsersSharedModule', () => {
  let sharedModule: CoreUsersModule;

  beforeEach(() => {
    sharedModule = new CoreUsersModule();
  });

  it('should create an instance', () => {
    expect(sharedModule).toBeTruthy();
  });
});
