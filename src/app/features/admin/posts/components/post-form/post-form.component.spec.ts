import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostsPostFormComponent } from './post-form.component';

describe('PostFormComponent', () => {
  let component: AdminPostsPostFormComponent;
  let fixture: ComponentFixture<AdminPostsPostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostsPostFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostsPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
