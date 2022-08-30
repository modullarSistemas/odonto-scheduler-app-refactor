import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/models/routes';
import { Treatment } from 'src/app/shared/models/Treatment';

@Component({
  selector: 'app-treatments-tab',
  templateUrl: './treatments-tab.component.html',
  styleUrls: ['./treatments-tab.component.css']
})
export class TreatmentsTabComponent implements OnInit {
  @ViewChild(MatAccordion) accordion?: MatAccordion;
  @Input() treatments?: Treatment[];

  public routes: typeof routes = routes;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigateToTreatment(treatmentId: any) {
    let route = routes.PATIENTS_PATIENT_TREATMENT_DENTIST as string;
    route = route.replace(":treatmentId", treatmentId);
    this.router.navigate([route]);
  }

}
