import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardWelcomeComponent } from './welcome.component';

describe('AdminDashboardWelcomeComponent', () => {
  let component: AdminDashboardWelcomeComponent;
  let fixture: ComponentFixture<AdminDashboardWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
