import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import User from '../models/user';
import { BaseURL } from './BaseURL';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  headers = new HttpHeaders().set('Authorization', `${localStorage.getItem("token")}`);

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${BaseURL}users`, {
      headers: this.headers
    })
  }

  getUserByName(name:string): Observable<User>{
    return this.http.get<User>(`${BaseURL}users/name/${name}`, {
      headers: this.headers
    })
  }

  ///addBook/{id}/{user}
  addBook(id: number, name: string): Observable<User>{
    return this.http.get<User>(`${BaseURL}users/addBook/${id}/${name}`,{
      headers: this.headers
    })
  }


}
