import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMediaMainComponent } from './main.component';

describe('MainComponent', () => {
  let component: AdminMediaMainComponent;
  let fixture: ComponentFixture<AdminMediaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMediaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMediaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
