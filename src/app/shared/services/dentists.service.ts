import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DentistsService {

  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  public createDentist(data: any) {
    return this.httpClient.post( this.apiUrl + "api/Dentist", data);
  }

  public getDentistsByFranchiseId() {
    let user = JSON.parse(localStorage.getItem('user') as string);
    return this.httpClient.get( this.apiUrl + "api/Dentist/ListByFranchiseId/" + user.franchiseId );
  }

  public getDentistById(dentistId: string) {
    return this.httpClient.get( this.apiUrl + "api/Dentist/GetById/" + dentistId );
  }

  public getDentistIdByUserId(userId: string) {
    return this.httpClient.get( this.apiUrl + "api/Dentist/GetByUserId/" + userId );
  }

  /*
  public getCategories() {
  //get enum from backend
    return of([
      {name: "Clinico Geral", id: 1}
    ]);
  }
  */
}
