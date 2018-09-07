import { UsersSharedModule } from './shared.module';

describe('UsersSharedModule', () => {
  let sharedModule: UsersSharedModule;

  beforeEach(() => {
    sharedModule = new UsersSharedModule();
  });

  it('should create an instance', () => {
    expect(sharedModule).toBeTruthy();
  });
});
