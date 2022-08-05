import { Component, Input, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/models/routes';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  routes: typeof routes = routes;
  user;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.user = this.authService.getUser();
  }

  public signOut(): void {
    this.authService.signOut();
    this.router.navigate([routes.LOGIN_AUTH]);
  }

}
