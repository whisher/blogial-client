import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostsPostDeleteComponent } from './post-delete.component';

describe('AdminPostsPostDeleteComponent', () => {
  let component: AdminPostsPostDeleteComponent;
  let fixture: ComponentFixture<AdminPostsPostDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostsPostDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostsPostDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
