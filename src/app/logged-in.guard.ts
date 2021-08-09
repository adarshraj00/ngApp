import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router){}
  canActivate(req:any,res:any): any {
    if(this.auth.loggedIn()){
      this.router.navigate(['/home']);
    }
    return true;
  }
  
}
