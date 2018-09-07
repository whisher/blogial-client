import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersUserPageComponent } from './user-page.component';

describe('AdminUsersUserPageComponent', () => {
  let component: AdminUsersUserPageComponent;
  let fixture: ComponentFixture<AdminUsersUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersUserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
