import { UiLoaderModule } from './loader.module';

describe('LoaderModule', () => {
  let loaderModule: UiLoaderModule;

  beforeEach(() => {
    loaderModule = new UiLoaderModule();
  });

  it('should create an instance', () => {
    expect(loaderModule).toBeTruthy();
  });
});
