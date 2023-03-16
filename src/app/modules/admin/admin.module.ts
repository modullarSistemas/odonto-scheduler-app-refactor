import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './container/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManualRegistersComponent } from './manual-registers/manual-registers.component';
import { ProceduresComponent } from './manual-registers/pages/procedures/procedures.component';
import { ProthesisComponent } from './manual-registers/pages/prothesis/prothesis.component';
import { TreatmentPlansComponent } from './manual-registers/pages/treatment-plans/treatment-plans.component';
import { DentalAppliancesComponent } from './manual-registers/pages/dental-appliances/dental-appliances.component';
import { DentistsComponent } from './dentists/dentists.component';
import { NewDentistComponent } from './dentists/pages/new-dentist/new-dentist.component';
import { DentistComponent } from './dentists/pages/dentist/dentist.component';
import { SecretariesComponent } from './secretaries/secretaries.component';
import { NewSecretaryComponent } from './secretaries/pages/new-secretary/new-secretary.component';
import { SecretaryComponent } from './secretaries/pages/secretary/secretary.component';
import { NewProthesisComponent } from './manual-registers/pages/prothesis/pages/new-prothesis/new-prothesis.component';
import { NewProcedureComponent } from './manual-registers/pages/procedures/pages/new-procedure/new-procedure.component';
import { TotalSalesChartComponent } from "./dashboard/total-sales-chart/total-sales-chart.component";


@NgModule({
    declarations: [
        AdminComponent,
        DashboardComponent,
        ManualRegistersComponent,
        ProceduresComponent,
        ProthesisComponent,
        TreatmentPlansComponent,
        DentalAppliancesComponent,
        DentistsComponent,
        NewDentistComponent,
        DentistComponent,
        SecretariesComponent,
        NewSecretaryComponent,
        SecretaryComponent,
        NewProthesisComponent,
        NewProcedureComponent,
        TotalSalesChartComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule,
        
    ]
})
export class AdminModule { }
