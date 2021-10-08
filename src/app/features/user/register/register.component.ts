import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  constructor(private auth:AuthService,private router:Router) { }
  
  ngOnInit(): void {
  }
  d=""
  onSubmit(v:any){
    if(v.value.name=="" || v.value.email=="" || v.value.password=="" || v.value.phone=="" || v.value.userName==""){
      alert("Please fill all the fields");
      return;
    }
    else{
      const isValidEmail=(email:string)=>{
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      };
      if(!isValidEmail(v.value.email)){
        alert("Please enter a valid email address");
        return;
      }
     }
    this.d=v.value
    if(v.value.password!==v.value.password1){
      alert("Password does not match");
      return;
    }
    console.log(v.value);
    this.auth.registerUser(v.value)
      .subscribe(
        (res:any)=>{
          console.log(res);
          localStorage.setItem('token',res.token);
          this.router.navigate(['home']);
        },
        err=>{
          if(err.status==401){
            alert("Username already exists");
          }
        }
      )
  }
}

// use navigate here import router
