import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostsPostListComponent } from './post-list.component';

describe('AdminPostsPostListComponent', () => {
  let component: AdminPostsPostListComponent;
  let fixture: ComponentFixture<AdminPostsPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostsPostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostsPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
