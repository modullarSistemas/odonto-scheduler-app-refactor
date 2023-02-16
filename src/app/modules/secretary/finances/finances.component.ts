import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FinancesService } from 'src/app/shared/services/finances.service';
import { ExpensesDialogComponent } from './components/expenses-dialog/expenses-dialog.component';
import { IncomesDialogComponent } from './components/incomes-dialog/incomes-dialog.component';

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.css']
})
export class FinancesComponent implements OnInit {

  incomes: any;
  expenses: any;
  all: any;

  constructor(
    private dialog: MatDialog,
    private financesServices: FinancesService,
    private authService: AuthService
  ) {
    this.getData();
  }

  ngOnInit(): void {
  }

  async getData() {
    let user: any = this.authService.getUser();

    await this.getAll(user.franchiseId);
  }

  async getAll(userId: any) {
    this.financesServices.getExpensesByFranchiseId(userId).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err)
      }
    })
    this.expenses = await lastValueFrom(this.financesServices.getExpensesByFranchiseId(userId));
    this.incomes = await lastValueFrom(this.financesServices.getIncomeByFranchiseId(userId));

    this.expenses.forEach( (expense: any) => {
      expense.type = 'expense';
    });

    this.incomes.forEach( (income: any) => {
      income.type = 'income';
    });

    this.incomes.forEach( (income: any) => {
      Object.assign(income, { date: income.paymentDate })['paymentDate'];
      delete income['paymentDate'];
    });

    this.all = [];
    this.all = this.all.concat(this.expenses);
    this.all = this.all.concat(this.incomes);
    this.all = this.all.sort(function(a:any, b:any){
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    console.log(this.all)
  }

  openExpenseDialog() {
    const dialogRef = this.dialog.open(ExpensesDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getData()
    });
  }

  openIncomeDialog() {
    const dialogRef = this.dialog.open(IncomesDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getData();
    });
  }

}
