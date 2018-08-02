import { PostsSharedModule } from './shared.module';

describe('SharedModule', () => {
  let sharedModule: PostsSharedModule;

  beforeEach(() => {
    sharedModule = new PostsSharedModule();
  });

  it('should create an instance', () => {
    expect(sharedModule).toBeTruthy();
  });
});
