import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProthesisService {

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  //change endpoints
  public createProthesis(data: any) {
    return this.httpClient.post( this.apiUrl + "api/Prothesis", data);
  }

  public getProthesis() {
    return this.httpClient.get( this.apiUrl + "api/Prothesis" );
  }

}
