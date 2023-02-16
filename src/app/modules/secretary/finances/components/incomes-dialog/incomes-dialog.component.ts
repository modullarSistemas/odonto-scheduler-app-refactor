import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PaymentMethodEnum } from 'src/app/shared/enums/PaymentMethodEnum';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FinancesService } from 'src/app/shared/services/finances.service';

@Component({
  selector: 'app-incomes-dialog',
  templateUrl: './incomes-dialog.component.html',
  styleUrls: ['./incomes-dialog.component.css']
})
export class IncomesDialogComponent implements OnInit {
  isLoading = false;
  incomeForm: FormGroup | any;

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
    private snackBar: MatSnackBar,
    private financesService: FinancesService,
    public authService: AuthService,
    public dialogRef: MatDialogRef<IncomesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    let user: any = this.authService.getUser();
    this.incomeForm = new FormGroup({
      value: new FormControl(0, Validators.required),
      //DATE BUG
      paymentDate: new FormControl(new Date()),
      franchiseId: new FormControl(user.franchiseId),
      paymentMethod: new FormControl()
    });
   }

  ngOnInit(): void {
  }

  createIncome() {
    this.isLoading = true;
    let data = this.incomeForm.value;
    console.log(this.paymentMethod);
    data.paymentMethod = this.paymentMethod;

    this.financesService.createIncome(data).subscribe({
      next: res => {
        this.isLoading = false;
        this.dialogRef.close();

        const snackBarRef = this.snackBar.open('Nova entrada adicionada!', 'Ok', {duration: 2000, panelClass: 'blue-snackbar'});
        snackBarRef.afterDismissed().subscribe(info => {
        });
      },
      error: error => {
        console.log(error);
      }
    })
  }

}
