import { AdminMediaModule } from './media.module';

describe('AdminMediaModule', () => {
  let mediaModule: AdminMediaModule;

  beforeEach(() => {
    mediaModule = new AdminMediaModule();
  });

  it('should create an instance', () => {
    expect(mediaModule).toBeTruthy();
  });
});
