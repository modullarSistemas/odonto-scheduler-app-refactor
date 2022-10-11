import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/models/routes';

@Component({
  selector: 'app-secretaries',
  templateUrl: './secretaries.component.html',
  styleUrls: ['./secretaries.component.css']
})
export class SecretariesComponent implements OnInit {
  public routes: typeof routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
