import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationLayoutFooterComponent } from './footer.component';

describe('AuthenticationFooterComponent', () => {
  let component: AuthenticationLayoutFooterComponent;
  let fixture: ComponentFixture<AuthenticationLayoutFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationLayoutFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationLayoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
