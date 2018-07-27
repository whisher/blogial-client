import { IwdfUiPasswordModule } from './password.module';

describe('PasswordModule', () => {
  let passwordModule: IwdfUiPasswordModule;

  beforeEach(() => {
    passwordModule = new IwdfUiPasswordModule();
  });

  it('should create an instance', () => {
    expect(passwordModule).toBeTruthy();
  });
});
