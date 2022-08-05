import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/models/routes';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  public todayDate: Date = new Date();
  public routers: typeof routes = routes;

  constructor(
    private service: AuthService,
    private router: Router
  ) {
    const user = JSON.parse(localStorage.getItem('user') as string);
    /*
    if(!user)
      return;

    if(user.role == 'secretary')
      this.router.navigate([this.routers.DASHBOARD_SECRETARY]).then();

    if(user.role == 'admin')
      this.router.navigate([this.routers.DASHBOARD_ADM]).then();

    if(user.role == 'dentist')
      this.router.navigate([this.routers.DASHBOARD_DENTIST]).then();
    */
  }


  public sendSignForm(): void {
    //this.service.sign();
    //this.router.navigate([this.routers.DASHBOARD]).then();
  }
}
