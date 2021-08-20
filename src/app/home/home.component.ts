import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth:AuthService,public router:Router) { }
  user:any
  ngOnInit(): void {
    console.log(this.user);
    this.auth.getData().subscribe((res)=>{
      console.log(res);
      this.user=res;
    },(err)=>console.log(err));
  }
  create(){
    this.router.navigate(['/create']);
  }
}
