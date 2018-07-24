import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationMainComponent } from './main.component';

describe('AuthenticationMainComponent', () => {
  let component: AuthenticationMainComponent;
  let fixture: ComponentFixture<AuthenticationMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
