import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Book from '../models/book';
import { BaseURL } from './BaseURL';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  headers = new HttpHeaders().set('Authorization', `${localStorage.getItem("token")}`);
  

  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(`${BaseURL}books`, {
    headers : this.headers    
    })
  }

  getBookById(id: number): Observable<Book>{
    return this.http.get<Book>(`${BaseURL}books/${id}`,
    {headers: this.headers}
    )
  }
  
  

}
