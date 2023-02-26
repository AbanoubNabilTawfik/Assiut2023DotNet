import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 baseUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }

  postUserToBackend(user:User)
  {
    //make http call to the backend
    this.http.post(this.baseUrl+'api/user',user).subscribe({
      next:data=>console.log(data),
      error:error=>console.log(error)
    })
  }
}
