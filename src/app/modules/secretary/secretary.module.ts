import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretaryRoutingModule } from './secretary-routing.module';
import { SecretaryComponent } from './container/secretary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    SecretaryComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SecretaryRoutingModule,
    SharedModule
  ]
})
export class SecretaryModule { }
