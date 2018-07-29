import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationLayoutMainComponent } from './main.component';

describe('AuthenticationMainComponent', () => {
  let component: AuthenticationLayoutMainComponent;
  let fixture: ComponentFixture<AuthenticationLayoutMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationLayoutMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationLayoutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
