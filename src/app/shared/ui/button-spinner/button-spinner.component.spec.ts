import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IwdfButtonSpinnerComponent } from './button-spinner.component';

describe('ButtonSpinnerComponent', () => {
  let component: IwdfButtonSpinnerComponent;
  let fixture: ComponentFixture<IwdfButtonSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IwdfButtonSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IwdfButtonSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
