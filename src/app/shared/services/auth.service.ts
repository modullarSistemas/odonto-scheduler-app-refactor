import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DentistsService } from './dentists.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
    private dentistsService: DentistsService
    ) { }

  public login(username: string, password: string)  {
    return this.httpClient.post( this.apiUrl + "api/login/Authenticate", {
      "username": username,
      "password": password,
    });

  }

  public createUser(data: any) {
    return this.httpClient.post( this.apiUrl + "api/login", data);
  }

  public async setUserData(data: any) {
    let user: any = {
      'token': data.token,
      'username': data.username,
      'role': data.role,
      'userId': data.user_id,
      'franchiseId': data.franchiseId
    }

    if(data.role == "dentist") {
      let dentist: any = await this.dentistsService.getDentistIdByUserId(data.userId).toPromise();
      user.dentistId = dentist.id;
    }

    localStorage.setItem('user', JSON.stringify(user));
  }

  public signOut(): void {
    localStorage.removeItem('user');
  }

  public getUser() {
    let user = JSON.parse(localStorage.getItem('user') as string);
    return  user;
  }

  public setToken(token: string): void{
    localStorage.setItem('token', token);
  }

  public getToken(): string{
    return localStorage.getItem('token') as string;
  }
}
