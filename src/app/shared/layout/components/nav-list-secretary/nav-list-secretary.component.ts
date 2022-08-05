import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/models/routes';

@Component({
  selector: 'app-nav-list-secretary',
  templateUrl: './nav-list-secretary.component.html',
  styleUrls: ['./nav-list-secretary.component.css']
})
export class NavListSecretaryComponent implements OnInit {
  public routes: typeof routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
