import { IconsFortawesomeModule } from './fortawesome.module';

describe('FortawesomeModule', () => {
  let fortawesomeModule: IconsFortawesomeModule;

  beforeEach(() => {
    fortawesomeModule = new IconsFortawesomeModule();
  });

  it('should create an instance', () => {
    expect(fortawesomeModule).toBeTruthy();
  });
});
