import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/models/routes';

@Component({
  selector: 'app-nav-list-dentist',
  templateUrl: './nav-list-dentist.component.html',
  styleUrls: ['./nav-list-dentist.component.css']
})
export class NavListDentistComponent implements OnInit {
  public routes: typeof routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
