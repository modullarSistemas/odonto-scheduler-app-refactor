import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DentistRoutingModule } from './dentist-routing.module';
import { DentistComponent } from './container/dentist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PatientsComponent } from './patients/patients.component';
import { PatientCardComponent } from './patients/components/patient-card/patient-card.component';
import { PatientComponent } from './patients/pages/patient/patient.component';
import { InfoTabComponent } from './patients/pages/patient/components/info-tab/info-tab.component';
import { TreatmentsTabComponent } from './patients/pages/patient/components/treatments-tab/treatments-tab.component';
import { TreatmentEvaluationComponent } from './patients/pages/treatment-evaluation/treatment-evaluation.component';
import { MedicalAnamnesisStepperComponent } from './patients/pages/treatment-evaluation/components/medical-anamnesis-stepper/medical-anamnesis-stepper.component';
import { OdontologicalAnamnesisStepperComponent } from './patients/pages/treatment-evaluation/components/odontological-anamnesis-stepper/odontological-anamnesis-stepper.component';
import { ProceduresSelectionStepperComponent } from './patients/pages/treatment-evaluation/components/procedures-selection-stepper/procedures-selection-stepper.component';

@NgModule({
  declarations: [
    DentistComponent,
    DashboardComponent,
    PatientsComponent,
    PatientCardComponent,
    PatientComponent,
    InfoTabComponent,
    TreatmentsTabComponent,
    TreatmentEvaluationComponent,
    MedicalAnamnesisStepperComponent,
    OdontologicalAnamnesisStepperComponent,
    ProceduresSelectionStepperComponent
  ],
  imports: [
    CommonModule,
    DentistRoutingModule,
    SharedModule
  ]
})
export class DentistModule { }
