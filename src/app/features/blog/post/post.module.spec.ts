import { BlogPostModule } from './post.module';

describe('BlogPostModule', () => {
  let postModule: BlogPostModule;

  beforeEach(() => {
    postModule = new BlogPostModule();
  });

  it('should create an instance', () => {
    expect(postModule).toBeTruthy();
  });
});
