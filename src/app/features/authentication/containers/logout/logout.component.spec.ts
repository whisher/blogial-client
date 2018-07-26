import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationLogoutComponent } from './logout.component';

describe('LogoutComponent', () => {
  let component: AuthenticationLogoutComponent;
  let fixture: ComponentFixture<AuthenticationLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
