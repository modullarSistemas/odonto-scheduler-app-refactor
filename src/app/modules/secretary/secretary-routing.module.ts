import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecretaryComponent } from './container/secretary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewPatientComponent } from './patients/new-patient/new-patient.component';
import { PatientComponent } from './patients/patient/patient.component';
import { PatientsComponent } from './patients/patients.component';
import { EvaluationsComponent } from './schedule/evaluations/evaluations.component';
import { NewEvaluationEventComponent } from './schedule/evaluations/new-evaluation-event/new-evaluation-event.component';
import { HistoryComponent } from './schedule/history/history.component';
import { NewProcedureEventComponent } from './schedule/procedures/new-procedure-event/new-procedure-event.component';
import { ProceduresComponent } from './schedule/procedures/procedures.component';

const routes: Routes = [
  {
    path: '',
    component: SecretaryComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'patients', component: PatientsComponent
      },
      {
        path: 'patients/new-patient', component: NewPatientComponent
      },
      {
        path: 'patients/:id', component: PatientComponent
      },
      {
        path: 'schedule/evaluations', component: EvaluationsComponent
      },
      {
        path: 'schedule/evaluations/new-evaluation-event', component: NewEvaluationEventComponent
      },
      {
        path: 'schedule/procedures', component: ProceduresComponent
      },
      {
        path: 'schedule/procedures/new-procedure-event', component: NewProcedureEventComponent
      },
      {
        path: 'schedule/history', component: HistoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretaryRoutingModule { }
