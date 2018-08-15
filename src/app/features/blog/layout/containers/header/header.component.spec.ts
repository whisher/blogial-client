import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLayoutHeaderComponent } from './header.component';

describe('BlogLayoutHeaderComponent', () => {
  let component: BlogLayoutHeaderComponent;
  let fixture: ComponentFixture<BlogLayoutHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogLayoutHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
