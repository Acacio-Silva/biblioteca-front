import { Login } from './../components/login/login.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseURL } from './BaseURL';

interface TokenJWT{
  token:string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  signin(login : Login): Observable<any>{
    return this.http.post<any>(`${BaseURL}users/login`, login)
  }

}
