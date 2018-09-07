import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogContactMainComponent } from './main.component';

describe('BlogAboutMainComponent', () => {
  let component: BlogContactMainComponent;
  let fixture: ComponentFixture<BlogContactMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogContactMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogContactMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
