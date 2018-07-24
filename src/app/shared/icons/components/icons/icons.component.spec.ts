import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFaUserComponent } from './icons.component';

describe('IconsComponents', () => {
  let component: IconFaUserComponent;
  let fixture: ComponentFixture<IconFaUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconFaUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconFaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
