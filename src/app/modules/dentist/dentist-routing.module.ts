import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DentistComponent } from './container/dentist.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: DentistComponent,
  children: [
    {
      path: 'dashboard', component: DashboardComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentistRoutingModule { }
