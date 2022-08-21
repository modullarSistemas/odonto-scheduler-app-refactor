import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DentistComponent } from './dentists/pages/dentist/dentist.component';
import { ProceduresComponent } from './manual-registers/pages/procedures/procedures.component';
import { AdminComponent } from './container/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewDentistComponent } from './dentists/pages/new-dentist/new-dentist.component';
import { ManualRegistersComponent } from './manual-registers/manual-registers.component';
import { DentalAppliancesComponent } from './manual-registers/pages/dental-appliances/dental-appliances.component';
import { ProthesisComponent } from './manual-registers/pages/prothesis/prothesis.component';
import { TreatmentPlansComponent } from './manual-registers/pages/treatment-plans/treatment-plans.component';
import { NewSecretaryComponent } from './secretaries/pages/new-secretary/new-secretary.component';
import { SecretaryComponent } from './secretaries/pages/secretary/secretary.component';
import { SecretariesComponent } from './secretaries/secretaries.component';
import { NewProcedureComponent } from './manual-registers/pages/procedures/pages/new-procedure/new-procedure.component';
import { NewProthesisComponent } from './manual-registers/pages/prothesis/pages/new-prothesis/new-prothesis.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: 'dashboard', component: DashboardComponent
    },
    {
      path: 'manual-registers', component: ManualRegistersComponent
    },
    {
      path: 'manual-registers/procedures', component: ProceduresComponent
    },
    {
      path: 'manual-registers/procedures/new-procedure', component: NewProcedureComponent
    },
    {
      path: 'manual-registers/prothesis', component: ProthesisComponent
    },
    {
      path: 'manual-registers/prothesis/new-prothesis', component: NewProthesisComponent
    },
    {
      path: 'manual-registers/dental-appliances', component: DentalAppliancesComponent
    },
    {
      path: 'manual-registers/treatment-plans', component: TreatmentPlansComponent
    },
    {
      path: 'dentists', component: DentistComponent
    },
    {
      path: 'dentists/new-dentist', component: NewDentistComponent
    },
    {
      path: 'dentists/:id', component: DentistComponent
    },
    {
      path: 'secretaries', component: SecretariesComponent
    },
    {
      path: 'secretaries/new-secretary', component: NewSecretaryComponent
    },
    {
      path: 'secretaries/:id', component: SecretaryComponent
    }

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
