import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/shared/models/Patient';
import { Treatment } from 'src/app/shared/models/Treatment';
import { PatientsService } from 'src/app/shared/services/patients.service';
import { TreatmentsService } from 'src/app/shared/services/treatments.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patientId: any;
  patient?: Patient;
  treatments?: Treatment[];

  constructor(
    public patientsService: PatientsService,
    public treatmentsService: TreatmentsService,
    private route: ActivatedRoute,
  ) {
    this.patientId = this.route.snapshot.paramMap.get('id');
    this.getPatient();
    this.getTreatments();
  }

  ngOnInit(): void {
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
}
