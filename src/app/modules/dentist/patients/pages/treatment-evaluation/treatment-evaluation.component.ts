import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { TreatmentStatusEnum } from 'src/app/shared/enums/TreatmentStatusEnum';
import { routes } from 'src/app/shared/models/routes';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PatientsService } from 'src/app/shared/services/patients.service';
import { TreatmentsService } from 'src/app/shared/services/treatments.service';
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
  routes: typeof routes = routes;
  patientId?: any;
  treatmentTypeId?: any;

  medicalQuestionaire = medicalQuestionaire;
  odontologicalQuestionaire = odontologicalQuestionaire;
  selectedProcedures = <any>[];
  treatmentDescription: string = "";
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    public patientsService: PatientsService,
    public treatmentsService: TreatmentsService,
    public authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
    ) {
    this.patientId = this.route.snapshot.paramMap.get('id');
    this.treatmentTypeId = this.route.snapshot.paramMap.get('treatmentType');
    }

  ngOnInit(): void {
  }

  deleteProcedure(procedure: any) {
    const index: number = this.selectedProcedures.indexOf(procedure);
    if (index !== -1) {
      this.selectedProcedures.splice(index, 1);
    }
  }

  async createTreatment() {
    this.isLoading = true;

    let user = this.authService.getUser();
    let treatmentData = {
      pacientId: parseInt(this.patientId),
      installmentQuantity: 0,
      totalCost: 0,
      installmentDueDay: 0,
      status: 2,
      anamnesis: "string",
      description: this.treatmentDescription,
      treatmentType: parseInt(this.treatmentTypeId),
      dentistId: user.dentistId
    };

    let treatment: any = await lastValueFrom(this.treatmentsService.createTreatment(treatmentData));

    let questionaireJson = {
      odontologicalQuestionaire: this.odontologicalQuestionaire,
      medicalQuestionaire: this.medicalQuestionaire,
    };

    let updateTreatmentData = {
      pacientId: treatment?.pacient?.id,
      anamnesis: JSON.stringify(questionaireJson),
      description: this.treatmentDescription,
    };

    await lastValueFrom(this.treatmentsService.updateTreatmentAnamnesis(treatment.id, updateTreatmentData));

    let procedures: any = [];
    this.selectedProcedures.forEach((procedure: any) => {
      let parsedProcedure;
      if (procedure.needProthesis) {
        parsedProcedure = {
          dentistId: procedure.dentist.id,
          procedureTypeId: procedure.id,
          prothesisId: procedure.prothesis.id,
          tooth: parseInt(procedure.tooth),
          needProthesis: procedure.needProthesis,
          completed: false,
        };
      } else {
        parsedProcedure = {
          dentistId: procedure.dentist.id,
          procedureTypeId: procedure.id,
          prothesisId: null,
          tooth: 0,
          needProthesis: false,
          completed: false,
        };
      }
      procedures.push(parsedProcedure);
    });

    await lastValueFrom(this.treatmentsService.updateTreatmentStatus(treatment.id, TreatmentStatusEnum.AvaliacaoCompleta));
    await lastValueFrom(this.treatmentsService.createTreatmentPlan(treatment.id, procedures));

    const snackBarRef = this.snackBar.open('Tratamento criado!', 'Ok', {duration: 2000, panelClass: 'blue-snackbar'});
    snackBarRef.afterDismissed().subscribe(info => {
      let route = this.routes.PATIENTS_PATIENT_DENTIST as string;
      route = route.replace(":id", this.patientId);
      this.isLoading = false;
      this.router.navigate([route]);
    });

    //toaster treatment created
    //this.router.navigate(['/patients/treatment/' + this.treatmentId])

  }
}
