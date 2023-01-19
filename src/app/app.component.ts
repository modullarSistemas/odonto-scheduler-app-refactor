import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from './shared/models/routes';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routes: typeof routes = routes;
  title = 'planeja-odonto-app-refactor';

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
    let res = this.authService.getUser();

    this.router.navigate([routes.LOGIN_AUTH]).then();


    /*
    if its base url ex: www.localhost.com
    should redirect to specific user role

    if (res.role == 'admin') {
      this.router.navigate([routes.DASHBOARD_ADM]).then();
    }

    if (res.role == 'dentist') {
      this.router.navigate([routes.DASHBOARD_DENTIST]).then();
    }

    if (res.role == 'secretary') {
      this.router.navigate([routes.DASHBOARD_SECRETARY]).then();
    }
    */
  }



}
