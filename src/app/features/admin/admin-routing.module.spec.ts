import { AdminRoutingModule } from './Admin-routing.module';

describe('AdminRoutingModule', () => {
  let adminRoutingModule: AdminRoutingModule;

  beforeEach(() => {
    adminRoutingModule = new AdminRoutingModule();
  });

  it('should create an instance', () => {
    expect(adminRoutingModule).toBeTruthy();
  });
});
