import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public http:HttpClient) { }
  register(data:any){
   return  this.http.post('http://localhost:3000/api/registerdata',data);
  }
  getdata(){
    return this.http.get('http://localhost:3000/api/getdata');
  }
}
