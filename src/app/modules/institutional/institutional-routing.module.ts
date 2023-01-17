import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InstitutionalComponent } from './container/institutional.component'
import { SiteComponent } from './site/site.component';

const routes: Routes = [
  {
    path: '',
    component: InstitutionalComponent,
    children: [
      {
        path: '', component: SiteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitutionalRoutingModule { }
