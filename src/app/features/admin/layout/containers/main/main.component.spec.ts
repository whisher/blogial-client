import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutMainComponent } from './main.component';

describe('AdminMainComponent', () => {
  let component: AdminLayoutMainComponent;
  let fixture: ComponentFixture<AdminLayoutMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLayoutMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
