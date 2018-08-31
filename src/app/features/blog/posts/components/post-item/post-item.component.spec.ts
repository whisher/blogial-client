import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostsPostItemComponent } from './post-item.component';

describe('PostItemComponent', () => {
  let component: BlogPostsPostItemComponent;
  let fixture: ComponentFixture<BlogPostsPostItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostsPostItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostsPostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
