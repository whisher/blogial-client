import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersUserListComponent } from './user-list.component';

describe('AdminUsersUserListComponent', () => {
  let component: AdminUsersUserListComponent;
  let fixture: ComponentFixture<AdminUsersUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
