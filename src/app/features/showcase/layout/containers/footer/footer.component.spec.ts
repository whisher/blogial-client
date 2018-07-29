import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseLayoutFooterComponent } from './footer.component';

describe('ShowcaseFooterComponent', () => {
  let component: ShowcaseLayoutFooterComponent;
  let fixture: ComponentFixture<ShowcaseLayoutFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseLayoutFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseLayoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
