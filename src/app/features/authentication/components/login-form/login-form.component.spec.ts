import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationLoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: AuthenticationLoginFormComponent;
  let fixture: ComponentFixture<AuthenticationLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
