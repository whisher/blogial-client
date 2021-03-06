import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UIConfirmComponent } from './confirm.component';

describe('UIConfirmComponent', () => {
  let component: UIConfirmComponent;
  let fixture: ComponentFixture<UIConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UIConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UIConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
