import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationLoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: AuthenticationLoginPageComponent;
  let fixture: ComponentFixture<AuthenticationLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
