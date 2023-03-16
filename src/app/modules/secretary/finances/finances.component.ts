import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FinancesService } from 'src/app/shared/services/finances.service';
import { ExpensesDialogComponent } from './components/expenses-dialog/expenses-dialog.component';
import { IncomesDialogComponent } from './components/incomes-dialog/incomes-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Income } from 'src/app/shared/models/Finance/Income';
@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.css']
})



export class FinancesComponent implements AfterViewInit {

  incomes: any;
  expenses: any;
  all: any;
  totalIncome : any;

  incomeDisplayedColumns: string[] = ['id', 'value', 'paymentMethod', 'paymentDate'];
  incomeDataSource = new MatTableDataSource<Income>();



  constructor(
    private dialog: MatDialog,
    private financesServices: FinancesService,
    private authService: AuthService
  ) {

  }


  ngAfterViewInit() {
    this.getData();
    console.log("teste");
    console.log(this.incomes);

    this.incomeDataSource = this.incomes;
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

    this.expenses.forEach((expense: any) => {
      expense.type = 'expense';
    });


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
