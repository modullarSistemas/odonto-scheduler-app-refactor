import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAnamnesisStepperComponent } from './medical-anamnesis-stepper.component';

describe('MedicalAnamnesisStepperComponent', () => {
  let component: MedicalAnamnesisStepperComponent;
  let fixture: ComponentFixture<MedicalAnamnesisStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalAnamnesisStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalAnamnesisStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
