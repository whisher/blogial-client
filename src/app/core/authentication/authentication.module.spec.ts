import { CoreAuthenticationModule } from './authentication.module';

describe('CoreAuthenticationModule', () => {
  let sharedModule: CoreAuthenticationModule;

  beforeEach(() => {
    sharedModule = new CoreAuthenticationModule();
  });

  it('should create an instance', () => {
    expect(sharedModule).toBeTruthy();
  });
});
