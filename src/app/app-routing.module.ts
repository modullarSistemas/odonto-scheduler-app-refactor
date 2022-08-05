import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminGuard } from './shared/guards/admin.guard';
import { DentistGuard } from './shared/guards/dentist.guard';
import { SecretaryGuard } from './shared/guards/secretary.guard';

const routes: Routes = [
  {
    path: '', component: AppComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    canActivate : [AdminGuard],
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'dentist',
    canActivate : [DentistGuard],
    loadChildren: () => import('./modules/dentist/dentist.module').then(m => m.DentistModule)
  },
  {
    path: 'secretary',
    canActivate : [SecretaryGuard],
    loadChildren: () => import('./modules/secretary/secretary.module').then(m => m.SecretaryModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
