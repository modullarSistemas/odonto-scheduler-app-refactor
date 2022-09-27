import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { TreatmentStatusEnum } from 'src/app/shared/enums/TreatmentStatusEnum';
import { routes } from 'src/app/shared/models/routes';
import { TreatmentsService } from 'src/app/shared/services/treatments.service';

@Component({
  selector: 'app-treatment-negotiation',
  templateUrl: './treatment-negotiation.component.html',
  styleUrls: ['./treatment-negotiation.component.css']
})
export class TreatmentNegotiationComponent implements OnInit {
  routes: typeof routes = routes;
  treatment: any;
  treatmentId: any;
  installmentsForm: FormGroup;
  isLoading = false;

  installmentQuantity = 1;
  installmentValue = 0;
  downPayment = 0;
  treatmentPrice = 0;
  dueDay = 0;

  constructor(
     private route: ActivatedRoute,
     private treatmentsService: TreatmentsService,
     private snackBar: MatSnackBar,
     private router: Router

  ) {
    this.treatmentId = this.route.snapshot.paramMap.get('treatmentId');
    this.installmentsForm = new FormGroup({
      installmentsQuantity: new FormControl(1, Validators.required),
      discount: new FormControl(0),
      installmentsDueDay:  new FormControl(1, Validators.required),
      downPayment: new FormControl(0)
    });

    this.dueDay = this.installmentsForm.get('installmentsDueDay')?.value;
  }

  ngOnInit(): void {
    this.getTreatment();
  }

  getTreatment() {
    this.treatmentsService.getTreatment(this.treatmentId).subscribe({
      next: (res) => {
        this.treatment = res;
        this.treatmentPrice = this.treatment.totalCost + this.treatment.prothesisCost;
        this.treatment.price = this.treatmentPrice;
        this.installmentValue = this.treatment.price;

      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  async createInstallments(stepper: any) {
    this.isLoading = true;
    let data = {
      installmentQuantity: this.installmentsForm.get('installmentsQuantity')?.value,
      installmentDueDay: this.installmentsForm.get('installmentsDueDay')?.value
    }

    await firstValueFrom(this.treatmentsService.generateInstallments(this.treatmentId, data));

    const snackBarRef = this.snackBar.open('Parcelas geradas!', 'Ok', {duration: 2000, panelClass: 'blue-snackbar'});
    snackBarRef.afterDismissed().subscribe(info => {
      stepper.next();
      this.isLoading = false;
    });

    await firstValueFrom(this.treatmentsService.updateTreatmentStatus(this.treatmentId, TreatmentStatusEnum.EmProgresso));
    this.isLoading = false;

    stepper.next();
  }

  calculateInstallments() {
    this.downPayment = this.installmentsForm.get('downPayment')?.value;
    this.treatment.price = this.treatmentPrice;
    this.treatment.price = this.treatment.price - this.downPayment;
    this.installmentQuantity = this.installmentsForm.get('installmentsQuantity')?.value;
    this.installmentValue = Math.ceil(this.treatment.price / this.installmentQuantity);
  }

  generateContract() {
    this.isLoading = true;

    const snackBarRef = this.snackBar.open('Contrato gerado, faca o download e assine!', 'Ok', {duration: 2000, panelClass: 'blue-snackbar'});
    snackBarRef.afterDismissed().subscribe(info => {
      let route = this.routes.PATIENTS_PATIENT_SECRETARY as string;
      route = route.replace(":id", this.treatment.pacient.id);
      this.router.navigate([route]);
    });

  }

}
