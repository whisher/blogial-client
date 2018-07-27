import { AuthenticationSharedModule } from './shared.module';

describe('AuthenticationSharedModule', () => {
  let sharedModule: AuthenticationSharedModule;

  beforeEach(() => {
    sharedModule = new AuthenticationSharedModule();
  });

  it('should create an instance', () => {
    expect(sharedModule).toBeTruthy();
  });
});
