import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { InstitutionalComponent } from './container/institutional.component';
import { SiteComponent } from './site/site.component'
import { InstitutionalRoutingModule } from './institutional-routing.module';

@NgModule({
  declarations: [
    InstitutionalComponent,
    SiteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InstitutionalRoutingModule
  ], entryComponents: [

  ]
})
export class InstitutionalModule { }
