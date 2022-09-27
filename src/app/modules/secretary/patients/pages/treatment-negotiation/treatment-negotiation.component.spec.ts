import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentNegotiationComponent } from './treatment-negotiation.component';

describe('TreatmentNegotiationComponent', () => {
  let component: TreatmentNegotiationComponent;
  let fixture: ComponentFixture<TreatmentNegotiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentNegotiationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatmentNegotiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
