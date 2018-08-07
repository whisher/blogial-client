import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostsPostItemComponent } from './post-item.component';

describe('PostItemComponent', () => {
  let component: AdminPostsPostItemComponent;
  let fixture: ComponentFixture<AdminPostsPostItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostsPostItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostsPostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
