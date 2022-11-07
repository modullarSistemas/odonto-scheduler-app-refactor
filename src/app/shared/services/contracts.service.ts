import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  generateTreatmentContract(treatmentId: any) {
    return this.httpClient.post(`${this.apiUrl}api/Contract/GenerateContract`, { treatmentId: parseInt(treatmentId)})
  }

  getTreatmentContractByTreatmentId(treatmentId: any) {
    return this.httpClient.get( `${this.apiUrl}api/Contract/GetContractPdfByTreatmentId?treatmentId=${treatmentId}`, { responseType: 'arraybuffer' });
  }
}
