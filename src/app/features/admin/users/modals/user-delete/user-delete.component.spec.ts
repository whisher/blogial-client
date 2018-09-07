import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersUserDeleteComponent } from './user-delete.component';

describe('AdminUsersUserDeleteComponent', () => {
  let component: AdminUsersUserDeleteComponent;
  let fixture: ComponentFixture<AdminUsersUserDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersUserDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersUserDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
