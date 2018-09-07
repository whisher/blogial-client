import { BlogContactModule } from './contact.module';

describe('BlogContactModule', () => {
  let contactModule: BlogContactModule;

  beforeEach(() => {
    contactModule = new BlogContactModule();
  });

  it('should create an instance', () => {
    expect(contactModule).toBeTruthy();
  });
});
