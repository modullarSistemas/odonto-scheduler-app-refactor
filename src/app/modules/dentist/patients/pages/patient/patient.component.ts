import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreatmentTypeEnum } from 'src/app/shared/enums/TreatmentTypeEnum';
import { Patient } from 'src/app/shared/models/Patient';
import { routes } from 'src/app/shared/models/routes';
import { Treatment } from 'src/app/shared/models/Treatment';
import { PatientsService } from 'src/app/shared/services/patients.service';
import { TreatmentsService } from 'src/app/shared/services/treatments.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  public routes: typeof routes = routes;

  patientId: any;
  patient?: Patient;
  treatments?: Treatment[];

  constructor(
    public patientsService: PatientsService,
    public treatmentsService: TreatmentsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.patientId = this.route.snapshot.paramMap.get('id');
    this.getPatient();
    this.getTreatments();
  }

  ngOnInit(): void {
  }

  navigateNewEvaluation(treatmentType: any) {
    let route = routes.PATIENTS_PATIENT_NEW_EVALUATION_DENTIST as string;
    route = route.replace(":id", this.patientId);
    route = route.replace(":treatmentType", treatmentType);

    this.router.navigate([route]);
  }

  getPatient() {
    this.patientsService.getPatient(this.patientId).subscribe({
      next: (res: any) => {
        this.patient = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getTreatments() {
    this.treatmentsService.getTreatments(this.patientId).subscribe({
      next: (res: any) => {
        this.treatments = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  get treatmentTypeEnum(): typeof TreatmentTypeEnum {
    return TreatmentTypeEnum;
  }

}
