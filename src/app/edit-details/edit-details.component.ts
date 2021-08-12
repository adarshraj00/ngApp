import { HttpErrorResponse } from '@angular/common/http';
import { unescapeIdentifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  user!: any;
 
  pass!:string;
  confirmPass!:string;
  oldPass:string="";
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    console.log("front")
    this.auth.getData().subscribe(
      res=>{
        // console.log(res);
        // console.log(typeof(JSON.stringify(res)));
        // console.log(typeof(res));
        this.user=res;
      },
      err=>{
        if(err instanceof HttpErrorResponse){
          alert("update failed")
        }
      }
    )
    
  }

 
  onClick(s:any){
    console.log(this.user,s);
    if(this.oldPass!==this.user.password){
      this.oldPass='';
      alert("Old password is wrong");
      return;
    }
    if(s!=="pass"){
      if(s=="name"){
        this.auth.update({name:this.user.name})
       .subscribe(res=>{
        console.log(res);
        this.user.name="test"
        this.user=res;
        console.log(this.user.name);
        alert(`updated ${s}`);
      },err=>{
        if(err instanceof HttpErrorResponse){
          alert("update failed :user name already exists")
        }
      });
      }
      else if(s=="username"){
        this.auth.update({userName:this.user.userName})
        .subscribe(res=>{
         console.log(res);
         this.user=res;
         alert(`updated ${s}`);
       },err=>console.log(err));
      }
      else if(s=="email"){
        console.log(this.user.email,"test")
        this.auth.update({email:this.user.email})
       .subscribe(res=>{
        console.log(res);
        this.user=res;
        alert(`updated ${s}`);
      },err=>console.log(err));
      }
      else if(s=="contact") {
        this.auth.update({contact:this.user.contact})
        .subscribe(res=>{
         console.log(res);
         this.user=res;
         alert(`updated ${s}`);
       },err=>console.log(err));
      }
    }
    else{
      if(this.pass!==this.confirmPass){
        alert("Passwords don't match");
      }
      else{
        this.auth.update({"password":this.pass})
        .subscribe(res=>{
          console.log(res)
          this.user=res;
          alert("updated password");
        },err=>console.log(err));
      }
    }
  }

}









//(ngSubmit)="onSubmit(f.value)" 