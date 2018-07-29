import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseLayoutMainComponent } from './main.component';

describe('ShowcaseMainComponent', () => {
  let component: ShowcaseLayoutMainComponent;
  let fixture: ComponentFixture<ShowcaseLayoutMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseLayoutMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseLayoutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
