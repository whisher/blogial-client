import { AdminPostsModule } from './posts.module';

describe('AdminPostsModule', () => {
  let postsModule: AdminPostsModule;

  beforeEach(() => {
    postsModule = new AdminPostsModule();
  });

  it('should create an instance', () => {
    expect(postsModule).toBeTruthy();
  });
});
