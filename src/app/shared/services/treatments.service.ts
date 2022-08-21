import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TreatmentsService {


  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getTreatment(treatmentId: any) {
    return this.httpClient.get( this.apiUrl + "api/Treatment/GetById/" + treatmentId );
  }

  getTreatments(patientId: any) {
    return this.httpClient.get( this.apiUrl + "api/Treatment/ListByPacientId/" + patientId );
  }

  updateTreatmentAnamnesis(treatmentId: any, data: any) {
    return this.httpClient.put( this.apiUrl + "api/Treatment/UpdateTreatment/" + treatmentId, data);
  }

  updateTreatmentStatus(treatmentId: any, status: any) {
    return this.httpClient.put( this.apiUrl + "api/Treatment/UpdateTreatmentStatus/" + treatmentId + "?status=" + status, {});
  }

  createTreatmentPlan(treatmentId: any, data: any) {
    return this.httpClient.post(this.apiUrl + "api/Treatment/CreateTreatmentPlan/" + treatmentId, data);
  }

  UpdateProcedureStatus(procedureId: any,status: any) {
    return this.httpClient.put( this.apiUrl + "api/Treatment/UpdateProcedureStatus/" + procedureId+ "?status=" + status, {});
  }

  generateInstallments(treatmentId: any, data: any) {
    return this.httpClient.post(this.apiUrl + "api/Finance/GenerateInstalments/" + treatmentId, data);
  }

  payInstallment(installmentId: any, paymentMethod: any) {
    return this.httpClient.post(this.apiUrl + "api/Finance/PayInstallment?installmentId=" + installmentId + "&paymentMethod=" + paymentMethod, {});
  }

  createTreatment(data: any) {
    //fix endpoint
    return this.httpClient.post( this.apiUrl + "api/Treatment/CreateTreatment", data);
  }



  getTreatmentEvaluation(treatmentId: any) {
    //fix endpoint
    return this.httpClient.get( this.apiUrl + "api/Treatment" );
  }

  getImplantologyTreatments(patientId: any) {
    return this.httpClient.get( this.apiUrl + "api/Treatment/ListImplantologyByPacientId/" + patientId );
  }

  getFacialHarmonizationTreatments(patientId: any) {
    return this.httpClient.get( this.apiUrl + "api/Treatment/ListFacialHarmonizationByPacientId/" + patientId );
  }

  getGeneralPracticionerTreatments(patientId: any) {
    return this.httpClient.get( this.apiUrl + "api/Treatment/ListGeneralClinicByPacientId/" + patientId );
  }

  getOrthodonticTreatments(patientId: any) {
    return this.httpClient.get( this.apiUrl + "api/Treatment/ListOrthodonticsByPacientId/" + patientId );
  }}
