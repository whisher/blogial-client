import { AdminUsersModule } from './users.module';

describe('AdminUsersModule', () => {
  let usersModule: AdminUsersModule;

  beforeEach(() => {
    usersModule = new AdminUsersModule();
  });

  it('should create an instance', () => {
    expect(usersModule).toBeTruthy();
  });
});
