import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostsMainComponent } from './main.component';

describe('BlogPostsMainComponent', () => {
  let component: BlogPostsMainComponent;
  let fixture: ComponentFixture<BlogPostsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
