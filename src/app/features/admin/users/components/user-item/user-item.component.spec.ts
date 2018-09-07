import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersUserItemComponent } from './user-item.component';

describe('AdminUsersUserItemComponent', () => {
  let component: AdminUsersUserItemComponent;
  let fixture: ComponentFixture<AdminUsersUserItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersUserItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersUserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
