import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/shared/models/Patient';
import { PatientsService } from 'src/app/shared/services/patients.service';
import { TreatmentService } from 'src/app/shared/services/treatment.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patientId: any;
  patient?: Patient;


  constructor(
    public patientsService: PatientsService,
    public treatmentsService: TreatmentService,
    private route: ActivatedRoute,
  ) {
    this.patientId = this.route.snapshot.paramMap.get('id');

    this.patientsService.getPatient(this.patientId).subscribe({
      next: (res: any) => {
        this.patient = res;

      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  ngOnInit(): void {
  }

}
