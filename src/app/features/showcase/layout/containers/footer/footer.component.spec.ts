import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseFooterComponent } from './footer.component';

describe('ShowcaseFooterComponent', () => {
  let component: ShowcaseFooterComponent;
  let fixture: ComponentFixture<ShowcaseFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
