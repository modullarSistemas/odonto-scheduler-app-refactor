import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinancesService {

  apiUrl = environment.financeApiUrl;
  constructor(private httpClient: HttpClient) { }

  public createExpense(data: any) {
    return this.httpClient.post( this.apiUrl + "api/Expense/AddExpense", data);
  }

  public getExpensesByFranchiseId(franchiseId: any) {
    return this.httpClient.get( this.apiUrl + "api/Expense/GetExpenseByFranchiseId/" + franchiseId );
  }

  public createIncome(data: any) {
    return this.httpClient.post( this.apiUrl + "api/Income/AddIncome", data);
  }

  public getIncomeByFranchiseId(franchiseId: any) {
    //api/Income/GetIncomeByFranchiseId/${franchiseId}
    return this.httpClient.get( this.apiUrl + "api/Income/GetIncomeByFranchiseId/" + franchiseId );
  }

  public getExpenseGroups() {
    return this.httpClient.get( this.apiUrl + "api/ExpenseGroup/ListExpenseGroups" );
  }

}
