import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/models/routes';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.css']
})
export class EvaluationsComponent implements OnInit {
  public routes: typeof routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
