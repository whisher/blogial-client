import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseHeaderComponent } from './header.component';

describe('ShowcaseHeaderComponent', () => {
  let component: ShowcaseHeaderComponent;
  let fixture: ComponentFixture<ShowcaseHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
