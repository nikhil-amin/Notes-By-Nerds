import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  };
  
  constructor(private http: HttpClient) { }

  postUser(user: User){
    return this.http.post('http://127.0.0.1:3000/api/register',user);
  }
}
