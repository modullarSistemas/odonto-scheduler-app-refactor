import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdontologicalAnamnesisStepperComponent } from './odontological-anamnesis-stepper.component';

describe('OdontologicalAnamnesisStepperComponent', () => {
  let component: OdontologicalAnamnesisStepperComponent;
  let fixture: ComponentFixture<OdontologicalAnamnesisStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdontologicalAnamnesisStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdontologicalAnamnesisStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
