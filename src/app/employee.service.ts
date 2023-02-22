import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IEmployee } from './IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl:string="/assets/Data/employees.json";
  postUrl:string="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }

  getEmployees():Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this.baseUrl).pipe(catchError((err)=>{
      return throwError (()=>err.message||"Server error")
    }));
  }
  CreatePost()
  {
    let obj={
      "userId":1,
      "id":2,
      "title":"This is new title",
      "body":"This is new body"
    }
    return this.http.post(this.postUrl,obj).pipe(catchError((err)=>{
      return throwError (()=>err.message||"Server error")
    }));
  }
}
