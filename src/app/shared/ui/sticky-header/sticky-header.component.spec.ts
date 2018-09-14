import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiStickyHeaderComponent } from './sticky-header.component';

describe('UiStickyHeaderComponent', () => {
  let component: UiStickyHeaderComponent;
  let fixture: ComponentFixture<UiStickyHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiStickyHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiStickyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
