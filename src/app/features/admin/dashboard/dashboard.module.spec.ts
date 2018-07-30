import { AdminDashboardModule } from './dashboard.module';

describe('AdminDashboardModule', () => {
  let dashboardModule: AdminDashboardModule;

  beforeEach(() => {
    dashboardModule = new AdminDashboardModule();
  });

  it('should create an instance', () => {
    expect(dashboardModule).toBeTruthy();
  });
});
