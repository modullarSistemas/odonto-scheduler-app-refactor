import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Treatment } from 'src/app/shared/models/Treatment';
import { TreatmentsService } from 'src/app/shared/services/treatments.service';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {
  treatmentId: any;
  treatment?: Treatment;
  odontologicalQuestionaire: any;
  medicalQuestionaire: any;
  treatmentTitle: string = "";
  loading = false;

  boundedGetTreatment = this.getTreatment.bind(this);

  constructor(
    public treatmentsService: TreatmentsService,
    private route: ActivatedRoute,

  ) { }

  async ngOnInit(){
    this.treatmentId = this.route.snapshot.paramMap.get('treatmentId');
    await this.getTreatment();
    this.treatmentTitle = `Tratamento ${this.treatment?.treatmentType} ${this.treatment?.id}`
  }

  async getTreatment() {
    this.treatment = await lastValueFrom(this.treatmentsService.getTreatment(this.treatmentId)) as Treatment;

    if(this.treatment.anamnesis != "" && this.treatment.anamnesis != "string") {
      let anamnesis: any = JSON.parse(this.treatment.anamnesis);
      this.treatment.anamnesis = anamnesis;
      this.odontologicalQuestionaire = anamnesis.odontologicalQuestionaire;
      this.medicalQuestionaire = anamnesis.medicalQuestionaire;
    }

  }
}
