import { BlogAboutModule } from './about.module';

describe('BlogAboutModule', () => {
  let aboutModule: BlogAboutModule;

  beforeEach(() => {
    aboutModule = new BlogAboutModule();
  });

  it('should create an instance', () => {
    expect(aboutModule).toBeTruthy();
  });
});
