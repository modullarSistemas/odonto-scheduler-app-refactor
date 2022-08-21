import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/shared/models/Patient';
import { routes } from 'src/app/shared/models/routes';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {
  public routes: typeof routes = routes;

  @Input() patient?: Patient;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.patient)
  }

  navigateToPatient() {
    this.router.navigate([this.routes.PATIENTS_PATIENT_DENTIST + this.patient?.id])
  }

}
