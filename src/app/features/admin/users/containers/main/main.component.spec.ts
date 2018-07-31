import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersMainComponent } from './main.component';

describe('AdminUsersMainComponent', () => {
  let component: AdminUsersMainComponent;
  let fixture: ComponentFixture<AdminUsersMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
