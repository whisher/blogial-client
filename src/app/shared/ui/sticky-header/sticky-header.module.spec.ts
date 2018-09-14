import { UiStickyHeaderModule } from './sticky-header.module';

describe('UiStickyHeaderModule', () => {
  let stickyHeaderModule: UiStickyHeaderModule;

  beforeEach(() => {
    stickyHeaderModule = new UiStickyHeaderModule();
  });

  it('should create an instance', () => {
    expect(stickyHeaderModule).toBeTruthy();
  });
});
