import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostsPostBoxComponent } from './post-box.component';

describe('AdminPostsPostBoxComponent', () => {
  let component: AdminPostsPostBoxComponent;
  let fixture: ComponentFixture<AdminPostsPostBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostsPostBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostsPostBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
