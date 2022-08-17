import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretaryRoutingModule } from './secretary-routing.module';
import { SecretaryComponent } from './container/secretary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EvaluationsComponent } from './schedule/evaluations/evaluations.component';
import { HistoryComponent } from './schedule/history/history.component';
import { ProceduresComponent } from './schedule/procedures/procedures.component';
import { NewEvaluationEventComponent } from './schedule/evaluations/new-evaluation-event/new-evaluation-event.component';
import { NewProcedureEventComponent } from './schedule/procedures/new-procedure-event/new-procedure-event.component';
import { PatientsComponent } from './patients/patients.component';
import { NewPatientComponent } from './patients/new-patient/new-patient.component';
import { PatientComponent } from './patients/patient/patient.component';
import { AddressFormComponent } from './patients/new-patient/components/address-form/address-form.component';
import { InfoFormComponent } from './patients/new-patient/components/info-form/info-form.component';
import { DependantsFormComponent } from './patients/new-patient/components/dependants-form/dependants-form.component';
import { PatientCardComponent } from './patients/components/patient-card/patient-card.component';
import { InfoTabComponent } from './patients/patient/components/info-tab/info-tab.component';
import { TreatmentsTabComponent } from './patients/patient/components/treatments-tab/treatments-tab.component';
import { FinancialTabComponent } from './patients/patient/components/financial-tab/financial-tab.component';

@NgModule({
  declarations: [
    SecretaryComponent,
    DashboardComponent,
    EvaluationsComponent,
    HistoryComponent,
    ProceduresComponent,
    NewEvaluationEventComponent,
    NewProcedureEventComponent,
    PatientsComponent,
    NewPatientComponent,
    PatientComponent,
    AddressFormComponent,
    InfoFormComponent,
    DependantsFormComponent,
    PatientCardComponent,
    InfoTabComponent,
    TreatmentsTabComponent,
    FinancialTabComponent
  ],
  imports: [
    CommonModule,
    SecretaryRoutingModule,
    SharedModule
  ]
})
export class SecretaryModule { }
