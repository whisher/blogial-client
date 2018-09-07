import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHomePostItemComponent } from './post-item.component';

describe('PostItemComponent', () => {
  let component: BlogHomePostItemComponent;
  let fixture: ComponentFixture<BlogHomePostItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogHomePostItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogHomePostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
