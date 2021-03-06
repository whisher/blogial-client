import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconEnvelopeComponent } from './icons.component';

describe('IconsComponents', () => {
  let component: IconEnvelopeComponent;
  let fixture: ComponentFixture<IconEnvelopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconEnvelopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconEnvelopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
