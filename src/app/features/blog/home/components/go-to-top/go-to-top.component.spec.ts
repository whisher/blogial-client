import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHomeGoToTopComponent } from './go-to-top.component';

describe('BlogHomeGoToTopComponent', () => {
  let component: BlogHomeGoToTopComponent;
  let fixture: ComponentFixture<BlogHomeGoToTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogHomeGoToTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogHomeGoToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
