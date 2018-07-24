import { AdminLayoutModule } from './layout.module';

describe('AdminLayoutModule', () => {
  let layoutModule: AdminLayoutModule;

  beforeEach(() => {
    layoutModule = new AdminLayoutModule();
  });

  it('should create an instance', () => {
    expect(layoutModule).toBeTruthy();
  });
});
