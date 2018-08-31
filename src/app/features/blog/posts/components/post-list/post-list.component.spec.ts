import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostsPostListComponent } from './post-list.component';

describe('AdminPostsPostListComponent', () => {
  let component: BlogPostsPostListComponent;
  let fixture: ComponentFixture<BlogPostsPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostsPostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostsPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
