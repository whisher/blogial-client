import { IwdfUiLoaderModule } from './loader.module';

describe('LoaderModule', () => {
  let loaderModule: IwdfUiLoaderModule;

  beforeEach(() => {
    loaderModule = new IwdfUiLoaderModule();
  });

  it('should create an instance', () => {
    expect(loaderModule).toBeTruthy();
  });
});
