import { Injectable,Injector } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler):any{
    let authService = this.injector.get(AuthService);
    let modifiedRequest=request.clone({
      setHeaders: {
        Authorization:`${authService.getToken()}`
      }
    })
    return next.handle(modifiedRequest);
  }
}
