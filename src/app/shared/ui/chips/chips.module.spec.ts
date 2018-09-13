import { UiChipsModule } from './chips.module';

describe('UiChipsModule', () => {
  let buttonsModule: UiChipsModule;

  beforeEach(() => {
    buttonsModule = new UiChipsModule();
  });

  it('should create an instance', () => {
    expect(buttonsModule).toBeTruthy();
  });
});
