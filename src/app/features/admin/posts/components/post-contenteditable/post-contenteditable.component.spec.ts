import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostsPostContenteditableComponent } from './post-contenteditable.component';

describe('AdminPostsPostContenteditableComponent', () => {
  let component: AdminPostsPostContenteditableComponent;
  let fixture: ComponentFixture<AdminPostsPostContenteditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostsPostContenteditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostsPostContenteditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
