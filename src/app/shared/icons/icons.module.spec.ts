import { IwdfIconsModule } from './icons.module';

describe('IconsModule', () => {
  let iconsModule: IwdfIconsModule;

  beforeEach(() => {
    iconsModule = new IwdfIconsModule();
  });

  it('should create an instance', () => {
    expect(iconsModule).toBeTruthy();
  });
});
