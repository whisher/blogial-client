import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersUserFormComponent } from './user-form.component';

describe('AdminUsersUserFormComponent', () => {
  let component: AdminUsersUserFormComponent;
  let fixture: ComponentFixture<AdminUsersUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
