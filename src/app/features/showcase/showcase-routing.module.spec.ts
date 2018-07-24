import { ShowcaseRoutingModule } from './showcase-routing.module';

describe('ShowcaseRoutingModule', () => {
  let showcaseRoutingModule: ShowcaseRoutingModule;

  beforeEach(() => {
    showcaseRoutingModule = new ShowcaseRoutingModule();
  });

  it('should create an instance', () => {
    expect(showcaseRoutingModule).toBeTruthy();
  });
});
