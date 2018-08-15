import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLayoutBrandComponent } from './brand.component';

describe('BrandComponent', () => {
  let component: BlogLayoutBrandComponent;
  let fixture: ComponentFixture<BlogLayoutBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogLayoutBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogLayoutBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
