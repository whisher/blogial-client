import { CorePostsdModule } from './posts.module';

describe('PostsSharedModule', () => {
  let sharedModule: CorePostsdModule;

  beforeEach(() => {
    sharedModule = new CorePostsdModule();
  });

  it('should create an instance', () => {
    expect(sharedModule).toBeTruthy();
  });
});
