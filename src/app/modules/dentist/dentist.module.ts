import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DentistRoutingModule } from './dentist-routing.module';
import { DentistComponent } from './container/dentist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DentistComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DentistRoutingModule,
    SharedModule
  ]
})
export class DentistModule { }
