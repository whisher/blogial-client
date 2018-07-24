import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationHeaderComponent } from './header.component';

describe('AuthenticationHeaderComponent', () => {
  let component: AuthenticationHeaderComponent;
  let fixture: ComponentFixture<AuthenticationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
