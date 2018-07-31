import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostsMainComponent } from './main.component';

describe('AdminPostsMainComponent', () => {
  let component: AdminPostsMainComponent;
  let fixture: ComponentFixture<AdminPostsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
