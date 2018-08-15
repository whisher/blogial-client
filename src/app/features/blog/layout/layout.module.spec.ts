import { BlogLayoutModule } from './layout.module';

describe('BlogLayoutModule', () => {
  let layoutModule: BlogLayoutModule;

  beforeEach(() => {
    layoutModule = new BlogLayoutModule();
  });

  it('should create an instance', () => {
    expect(layoutModule).toBeTruthy();
  });
});
