import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHomeMainComponent } from './main.component';

describe('BlogHomeMainComponent', () => {
  let component: BlogHomeMainComponent;
  let fixture: ComponentFixture<BlogHomeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogHomeMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogHomeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
