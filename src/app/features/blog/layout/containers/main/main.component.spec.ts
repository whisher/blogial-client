import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLayoutMainComponent } from './main.component';

describe('BlogLayoutMainComponent', () => {
  let component: BlogLayoutMainComponent;
  let fixture: ComponentFixture<BlogLayoutMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogLayoutMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogLayoutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
