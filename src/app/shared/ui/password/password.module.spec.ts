import { UiPasswordModule } from './password.module';

describe('UiPasswordModule', () => {
  let passwordModule: UiPasswordModule;

  beforeEach(() => {
    passwordModule = new UiPasswordModule();
  });

  it('should create an instance', () => {
    expect(passwordModule).toBeTruthy();
  });
});
