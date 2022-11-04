import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Treatment } from 'src/app/shared/models/Treatment';
import { TreatmentStatusEnum } from 'src/app/shared/enums/TreatmentStatusEnum';
import { routes } from 'src/app/shared/models/routes';
import { Router } from '@angular/router';
@Component({
  selector: 'app-treatments-tab',
  templateUrl: './treatments-tab.component.html',
  styleUrls: ['./treatments-tab.component.css']
})
export class TreatmentsTabComponent implements OnInit {
  public routes: typeof routes = routes;
  @ViewChild(MatAccordion) accordion?: MatAccordion;
  @Input() treatments?: Treatment[];

  treatmentsInNegotiation = <any>[];
  treatmentsHistory = <any>[];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.populateTreatments();
  }

  populateTreatments() {
    console.log(this.treatments);
    this.treatments?.forEach( (treatment: any) => {
      if(treatment.status == TreatmentStatusEnum.EmNegociacao){
        this.treatmentsInNegotiation.push(treatment);
   
      }
      else{
        this.treatmentsHistory.push(treatment);
      }
    })

  }

  openPayInstallmentDialog() {

  }

  openScheduleProcedureDialog() {

  }

  navigateToTreatmentNegotiation(treatmentId: string) {
    let route = this.routes.PATIENTS_TREATMENT_NEGOTIATION_SECRETARY as string;
    route = route.replace(":treatmentId", treatmentId);
    this.router.navigate([route]);
  }

}
