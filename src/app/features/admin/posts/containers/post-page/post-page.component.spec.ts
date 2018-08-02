import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostsPostPageComponent } from './post-page.component';

describe('AdminPostsPostPageComponent', () => {
  let component: AdminPostsPostPageComponent;
  let fixture: ComponentFixture<AdminPostsPostPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostsPostPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostsPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
