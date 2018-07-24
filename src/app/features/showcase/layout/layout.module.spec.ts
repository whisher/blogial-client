import { ShowcaseLayoutModule } from './layout.module';

describe('ShowcaseLayoutModule', () => {
  let layoutModule: ShowcaseLayoutModule;

  beforeEach(() => {
    layoutModule = new ShowcaseLayoutModule();
  });

  it('should create an instance', () => {
    expect(layoutModule).toBeTruthy();
  });
});
