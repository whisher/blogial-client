import { BlogHomeModule } from './home.module';

describe('BlogHomeModule', () => {
  let homeModule: BlogHomeModule;

  beforeEach(() => {
    homeModule = new BlogHomeModule();
  });

  it('should create an instance', () => {
    expect(homeModule).toBeTruthy();
  });
});
