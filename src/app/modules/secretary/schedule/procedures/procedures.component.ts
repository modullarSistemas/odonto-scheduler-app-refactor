import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/models/routes';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.css']
})
export class ProceduresComponent implements OnInit {
  public routes: typeof routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
