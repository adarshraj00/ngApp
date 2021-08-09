import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(v:any){  
   // console.log(v.value);
  
    this.auth.loginUser(v.value)
      .subscribe(
        (res:any)=>{
          console.log(res.message);
          localStorage.setItem('token',res.token);
          this.router.navigate(['home']);
        },
        err=>{
          if(err instanceof HttpErrorResponse){
            if(err.status===401){
              alert('Invalid username');
              this.router.navigate(['login']);
            }
            else if(err.status===402){
              alert('Invalid password');
              this.router.navigate(['login']);
            }
          }
        }
      )
  }
}
