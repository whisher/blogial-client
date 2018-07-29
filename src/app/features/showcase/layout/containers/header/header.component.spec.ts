import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseLayoutHeaderComponent } from './header.component';

describe('ShowcaseHeaderComponent', () => {
  let component: ShowcaseLayoutHeaderComponent;
  let fixture: ComponentFixture<ShowcaseLayoutHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseLayoutHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
