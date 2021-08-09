import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = 'http://localhost:3000/api/register';
  constructor(private http:HttpClient,private router:Router) { }
  registerUser(user:any) {
    return this.http.post(this._registerUrl,user,{headers:new HttpHeaders().set('Content-Type','application/json')})
  }
  loginUser(user:any) {
    return this.http.post('http://localhost:3000/api/login',user,{headers:new HttpHeaders().set('Content-Type','application/json')})
  }

  loggedIn() {
    return localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  getData(){
    return this.http.get('http://localhost:3000/api/userData')
  }
  update(s:any){
    console.log(s);
    return this.http.post('http://localhost:3000/api/update',s,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
}
