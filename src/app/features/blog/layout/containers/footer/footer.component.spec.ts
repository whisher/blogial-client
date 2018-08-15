import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLayoutFooterComponent } from './footer.component';

describe('BlogLayoutFooterComponent', () => {
  let component: BlogLayoutFooterComponent;
  let fixture: ComponentFixture<BlogLayoutFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogLayoutFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogLayoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
