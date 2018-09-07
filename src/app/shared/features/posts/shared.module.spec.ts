import { PostsSharedModule } from './shared.module';

describe('PostsSharedModule', () => {
  let sharedModule: PostsSharedModule;

  beforeEach(() => {
    sharedModule = new PostsSharedModule();
  });

  it('should create an instance', () => {
    expect(sharedModule).toBeTruthy();
  });
});
