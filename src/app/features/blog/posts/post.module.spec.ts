import { BlogPostsModule } from './post.module';

describe('PostsModule', () => {
  let postsModule: BlogPostsModule;

  beforeEach(() => {
    postsModule = new BlogPostsModule();
  });

  it('should create an instance', () => {
    expect(postsModule).toBeTruthy();
  });
});
