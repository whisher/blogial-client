import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IwdfLoaderComponent } from './loader.component';

describe('IwdfLoaderComponent', () => {
  let component: IwdfLoaderComponent;
  let fixture: ComponentFixture<IwdfLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IwdfLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IwdfLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
