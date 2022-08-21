import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DentistComponent } from './container/dentist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patients/pages/patient/patient.component';
import { TreatmentEvaluationComponent } from './patients/pages/treatment-evaluation/treatment-evaluation.component';
import { PatientsComponent } from './patients/patients.component';

const routes: Routes = [{
  path: '',
  component: DentistComponent,
  children: [
    {
      path: 'dashboard', component: DashboardComponent
    },
    {
      path: 'patients', component: PatientsComponent
    },
    {
      path: 'patients/:id', component: PatientComponent
    },
    {
      path: 'patients/:id/new-evaluation/:treatmentType', component: TreatmentEvaluationComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentistRoutingModule { }
