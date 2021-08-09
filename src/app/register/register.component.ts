import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
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
