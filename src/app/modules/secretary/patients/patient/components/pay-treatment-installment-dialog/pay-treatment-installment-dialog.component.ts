import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PaymentMethodEnum } from 'src/app/shared/enums/PaymentMethodEnum';
import { TreatmentsService } from 'src/app/shared/services/treatments.service';

@Component({
  selector: 'app-pay-treatment-installment-dialog',
  templateUrl: './pay-treatment-installment-dialog.component.html',
  styleUrls: ['./pay-treatment-installment-dialog.component.css']
})
export class PayTreatmentInstallmentDialogComponent implements OnInit {
  isLoading = false;
  paymentMethod: any;
  paymentMethodOptions = [
    {
      name: "Cartao de credito",
      value: PaymentMethodEnum.CreditCard
    },
    {
      name: "Dinheiro",
      value: PaymentMethodEnum.Cash
    },
    {
      name: "Cheque",
      value: PaymentMethodEnum.Check
    },
    {
      name: "Pix",
      value: PaymentMethodEnum.Pix
    },
];

  constructor(
    private treatmentService: TreatmentsService,
    public dialogRef: MatDialogRef<PayTreatmentInstallmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  payInstallment() {
    this.isLoading = true;
    this.treatmentService.payInstallment(this.data.installmentId, this.paymentMethod).subscribe({
      next: (res) => {
        this.dialogRef.close();
        const snackBarRef = this.snackBar.open('Parcela paga!', 'Ok', {duration: 2000, panelClass: 'blue-snackbar'});
        snackBarRef.afterDismissed().subscribe(info => {
          this.isLoading = false;
        });      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
