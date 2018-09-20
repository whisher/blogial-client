import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCarouselComponent } from './carousel.component';

describe('UiCarouselComponent', () => {
  let component: UiCarouselComponent;
  let fixture: ComponentFixture<UiCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
