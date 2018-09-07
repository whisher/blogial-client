import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutMastheadComponent } from './masthead.component';

describe('AdminLayoutMastheadComponent', () => {
  let component: AdminLayoutMastheadComponent;
  let fixture: ComponentFixture<AdminLayoutMastheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLayoutMastheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutMastheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
