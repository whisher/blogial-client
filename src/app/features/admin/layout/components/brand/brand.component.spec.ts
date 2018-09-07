import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutBrandComponent } from './brand.component';

describe('AdminLayoutBrandComponent', () => {
  let component: AdminLayoutBrandComponent;
  let fixture: ComponentFixture<AdminLayoutBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLayoutBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
