import { BlogHomeModule } from './home.module';

describe('HomeModule', () => {
  let homeModule: BlogHomeModule;

  beforeEach(() => {
    homeModule = new BlogHomeModule();
  });

  it('should create an instance', () => {
    expect(homeModule).toBeTruthy();
  });
});
