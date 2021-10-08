import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
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
