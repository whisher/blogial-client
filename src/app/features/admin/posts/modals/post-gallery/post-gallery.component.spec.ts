import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostsPostGalleryComponent } from './post-gallery.component';

describe('AdminPostsPostGalleryComponent', () => {
  let component: AdminPostsPostGalleryComponent;
  let fixture: ComponentFixture<AdminPostsPostGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostsPostGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostsPostGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
