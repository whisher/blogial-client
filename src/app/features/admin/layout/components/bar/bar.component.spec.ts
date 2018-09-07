import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutBarComponent } from './bar.component';

describe('AdminLayoutBarComponent', () => {
  let component: AdminLayoutBarComponent;
  let fixture: ComponentFixture<AdminLayoutBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLayoutBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
