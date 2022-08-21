import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientsService } from 'src/app/shared/services/patients.service';
import { medicalQuestionaire } from './medicalQuestionaireObject'
import { odontologicalQuestionaire } from './odontologicalQuestionaireObject';
@Component({
  selector: 'app-treatment-evaluation',
  templateUrl: './treatment-evaluation.component.html',
  styleUrls: ['./treatment-evaluation.component.css']
})
export class TreatmentEvaluationComponent implements OnInit {
  //create treatment in the end
  //vertical stepper
  //put anamnese object in seperate file
  //put anamnese inputs side by side
  //rethink add procedures stepper, think about

  patientId?: any;
  treatmentTypeId?: any;

  medicalQuestionaire = medicalQuestionaire;
  odontologicalQuestionaire = odontologicalQuestionaire;

  constructor(
    private route: ActivatedRoute,
    public patientsService: PatientsService,

    ) { }

  ngOnInit(): void {
    this.patientId = this.route.snapshot.paramMap.get('id');
    this.treatmentTypeId = this.route.snapshot.paramMap.get('treatmentType')
  }

  getPatient() {
    this.patientsService.getPatient(this.patientId).subscribe({
      next: (res: any) => {
        //this.patient = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
