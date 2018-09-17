import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLayoutMastheadComponent } from './masthead.component';

describe('BlogLayoutMastheadComponent', () => {
  let component: BlogLayoutMastheadComponent;
  let fixture: ComponentFixture<BlogLayoutMastheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogLayoutMastheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogLayoutMastheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
