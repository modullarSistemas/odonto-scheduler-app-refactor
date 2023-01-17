import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  createEvaluationScheduling(data: any) {
    console.log(data);
    return this.httpClient.post(this.apiUrl + "api/EvaluationScheduling", data);
  }

  getEvaluationsScheduling(franchiseId: any) {
    return this.httpClient.get(this.apiUrl + "api/EvaluationScheduling/ListByFranchiseId/" + franchiseId);
  }

  updateEvaluationSchedulingStatus(schedulingId: any, status: any) {
    return this.httpClient.post(this.apiUrl + `api/EvaluationScheduling/${schedulingId}?schedulingStatus=${status}`, {});
  }

  getProceduresScheduling(franchiseId: any) {
    return this.httpClient.get(this.apiUrl + "api/ProcedureScheduling/ListByFranchiseId/" + franchiseId);
  }

  getProcedursSchedulingByDentistId(dentistId: any) {
    return this.httpClient.get(this.apiUrl + "api/ProcedureScheduling/ListByDentistId/" + dentistId);
  }

  createProcedureScheduling(data: any) {
    return this.httpClient.post( `${this.apiUrl}api/ProcedureScheduling`, data)
  }

  updateProcedureSchedulingStatus(schedulingId: any, status: any) {
    return this.httpClient.post(this.apiUrl + `api/ProcedureScheduling/${schedulingId}?schedulingStatus=${status}`, {});
  }
}
