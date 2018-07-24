import { AuthenticationLayoutModule } from './layout.module';

describe('AuthenticationLayoutModule', () => {
  let layoutModule: AuthenticationLayoutModule;

  beforeEach(() => {
    layoutModule = new AuthenticationLayoutModule();
  });

  it('should create an instance', () => {
    expect(layoutModule).toBeTruthy();
  });
});
