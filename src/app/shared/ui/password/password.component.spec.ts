import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IwdfUiPasswordComponent } from './password.component';

describe('PasswordComponent', () => {
  let component: IwdfUiPasswordComponent;
  let fixture: ComponentFixture<IwdfUiPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IwdfUiPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IwdfUiPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
