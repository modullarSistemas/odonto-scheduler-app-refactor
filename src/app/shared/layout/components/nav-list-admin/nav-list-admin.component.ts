import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/models/routes';

@Component({
  selector: 'app-nav-list-admin',
  templateUrl: './nav-list-admin.component.html',
  styleUrls: ['./nav-list-admin.component.css']
})
export class NavListAdminComponent implements OnInit {
  public routes: typeof routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
