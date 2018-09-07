import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAboutMainComponent } from './main.component';

describe('BlogAboutMainComponent', () => {
  let component: BlogAboutMainComponent;
  let fixture: ComponentFixture<BlogAboutMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogAboutMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAboutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
