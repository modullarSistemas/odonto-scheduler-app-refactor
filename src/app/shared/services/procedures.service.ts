import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProceduresService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public createProcedure(data: any) {
    return this.httpClient.post( this.apiUrl + "api/ProcedureType", data);
  }

  public getOrthodonticsProcedures() {
    return this.httpClient.get( this.apiUrl + "api/ProcedureType/ListOrthodontics" );
  }

  public getGeneralClinicProcedures() {
    return this.httpClient.get( this.apiUrl + "api/ProcedureType/ListGeneralClinc" );
  }

  public getImplantologyProcedures() {
    return this.httpClient.get( this.apiUrl + "api/ProcedureType/ListImplantology" );
  }

  public getFacialHarmonizationProcedures() {
    return this.httpClient.get( this.apiUrl + "api/ProcedureType/ListFacialHarmonization" );
  }

  public getProcedures() {
    return this.httpClient.get( this.apiUrl + "api/ProcedureType/List" );
  }

  public getProcedureType(id: any) {
    return this.httpClient.get( this.apiUrl + "api/ProcedureType/GetById/" + id );
  }

}
