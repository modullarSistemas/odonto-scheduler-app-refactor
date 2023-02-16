import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FinancesService } from 'src/app/shared/services/finances.service';

@Component({
  selector: 'app-expenses-dialog',
  templateUrl: './expenses-dialog.component.html',
  styleUrls: ['./expenses-dialog.component.css']
})
export class ExpensesDialogComponent implements OnInit {

  isLoading = false;
  expenseForm: FormGroup | any;
  expenseGroups: any;

  constructor(
    private snackBar: MatSnackBar,
    private financesService: FinancesService,
    public authService: AuthService,
    public dialogRef: MatDialogRef<ExpensesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    let user: any = this.authService.getUser();
    this.expenseForm = new FormGroup({
      value: new FormControl(0, Validators.required),
      expenseGroupId: new FormControl(),
      franchiseId: new FormControl(user.franchiseId),
      description: new FormControl('', Validators.required)
    });
    this.getExpenseGroups();
   }

  ngOnInit(): void {
  }

  createExpense() {
    this.isLoading = true;
    let data = this.expenseForm.value;

    this.financesService.createExpense(data).subscribe({
      next: res => {
        this.isLoading = false;
        this.dialogRef.close();

        const snackBarRef = this.snackBar.open('Nova saida adicionada!', 'Ok', {duration: 2000, panelClass: 'blue-snackbar'});
        snackBarRef.afterDismissed().subscribe(info => {
        });
      },
      error: error => {
        console.log(error);
      }
    })
  }

  getExpenseGroups() {
    this.financesService.getExpenseGroups().subscribe({
      next: res => {
        this.expenseGroups = res;
      },
      error: error => {
        console.log(error);
      }
    })
  }

}
