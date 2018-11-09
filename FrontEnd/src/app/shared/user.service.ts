import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  @Output() loginStatusEmitter: EventEmitter<String> = new EventEmitter()
  loginStatus = "false";

  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  postUser(user: User){
    return this.http.post('http://127.0.0.1:3000/api/register',user,this.noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post('http://127.0.0.1:3000/api/authenticate', authCredentials,this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get('http://127.0.0.1:3000/api/userProfile');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    this.loginStatus = "false"
    this.loginStatusEmitter.emit(this.loginStatus);
    localStorage.removeItem('token');   
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload){
      this.loginStatus = "true"
      this.loginStatusEmitter.emit(this.loginStatus);
      return userPayload.exp > Date.now() / 1000;
    }
    else
      return false;
  }
}
