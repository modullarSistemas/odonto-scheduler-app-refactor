import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/models/routes';

@Component({
  selector: 'app-prothesis',
  templateUrl: './prothesis.component.html',
  styleUrls: ['./prothesis.component.css']
})
export class ProthesisComponent implements OnInit {
  public routes: typeof routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
