import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  public createPatient(data: any) {
    return this.httpClient.post( this.apiUrl + "api/Pacient", data );
  }

  public getPatients() {
    let user = JSON.parse(localStorage.getItem('user') as string);
    return this.httpClient.get( this.apiUrl + "api/Pacient/ListPacientByFranchiseId/" + user.franchiseId );
  }

  public getPatient(pacientId: string) {
    return this.httpClient.get( this.apiUrl + "api/Pacient/GetById/" + pacientId );
  }
}
