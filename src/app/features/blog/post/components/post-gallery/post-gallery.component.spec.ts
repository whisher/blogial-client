import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostGalleryComponent } from './post-gallery.component';

describe('BlogPostGalleryComponent', () => {
  let component: BlogPostGalleryComponent;
  let fixture: ComponentFixture<BlogPostGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
