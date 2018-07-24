import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseMainComponent } from './main.component';

describe('ShowcaseMainComponent', () => {
  let component: ShowcaseMainComponent;
  let fixture: ComponentFixture<ShowcaseMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
