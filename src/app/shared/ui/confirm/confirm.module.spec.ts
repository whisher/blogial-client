import { UiConfirmModule } from './confirm.module';

describe('UiConfirmModule', () => {
  let confirmModule: UiConfirmModule;

  beforeEach(() => {
    confirmModule = new UiConfirmModule();
  });

  it('should create an instance', () => {
    expect(confirmModule).toBeTruthy();
  });
});
