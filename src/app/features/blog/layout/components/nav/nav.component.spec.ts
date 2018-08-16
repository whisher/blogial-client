import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLayoutNavComponent } from './nav.component';

describe('BlogLayoutNavComponent', () => {
  let component: BlogLayoutNavComponent;
  let fixture: ComponentFixture<BlogLayoutNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogLayoutNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogLayoutNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
