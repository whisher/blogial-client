import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostMainComponent } from './main.component';

describe('BlogPostMainComponent', () => {
  let component: BlogPostMainComponent;
  let fixture: ComponentFixture<BlogPostMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
