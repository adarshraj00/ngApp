import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';


import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,private route:Router){}
  canActivate(): boolean  {
    if(this.auth.loggedIn())
    {
      return true;
    }
    else{
      this.route.navigate(['/user/login']);
      return false;
  }
}
}
