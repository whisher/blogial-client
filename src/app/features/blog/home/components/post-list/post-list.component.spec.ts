import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHomePostListComponent } from './post-list.component';

describe('BlogHomePostListComponent', () => {
  let component: BlogHomePostListComponent;
  let fixture: ComponentFixture<BlogHomePostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogHomePostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogHomePostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
