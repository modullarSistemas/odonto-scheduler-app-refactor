import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/models/routes';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  public routes: typeof routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
