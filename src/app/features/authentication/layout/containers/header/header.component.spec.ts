import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationLayoutHeaderComponent } from './header.component';

describe('AuthenticationHeaderComponent', () => {
  let component: AuthenticationLayoutHeaderComponent;
  let fixture: ComponentFixture<AuthenticationLayoutHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationLayoutHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
