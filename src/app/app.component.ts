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

    if(!res) {
      this.router.navigate([routes.LOGIN_AUTH]).then();
      return;
    }


  }



}
