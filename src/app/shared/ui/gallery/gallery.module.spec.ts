import { UiGalleryModule } from './gallery.module';

describe('UiGalleryModule', () => {
  let loaderModule: UiGalleryModule;

  beforeEach(() => {
    loaderModule = new UiGalleryModule();
  });

  it('should create an instance', () => {
    expect(loaderModule).toBeTruthy();
  });
});
