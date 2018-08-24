import { UiButtonsModule } from './buttons.module';

describe('UiButtonsModule', () => {
  let buttonsModule: UiButtonsModule;

  beforeEach(() => {
    buttonsModule = new UiButtonsModule();
  });

  it('should create an instance', () => {
    expect(buttonsModule).toBeTruthy();
  });
});
