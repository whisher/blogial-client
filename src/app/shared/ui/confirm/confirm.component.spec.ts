import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFabButtonComponent } from './buttons.component';

describe('UiFabButtonComponent', () => {
  let component: UiFabButtonComponent;
  let fixture: ComponentFixture<UiFabButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiFabButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiFabButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
