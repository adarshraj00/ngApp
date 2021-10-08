import { UserModule } from './features/user/user.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { HomeComponent } from './core/components/home/home.component';
import { TrendsComponent } from './core/components/trends/trends.component';
import { AuthGuard } from './core/guards/auth.guard';
import { TokenInterceptorService } from './core/interceptor/token-interceptor.service';
import { AuthService } from './core/services/auth.service';
import { ResumeModule } from './features/resume/resume.module';
import { LoggedInGuard } from './core/guards/logged-in.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrendsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    ReactiveFormsModule,
    ResumeModule
  ],
  providers: [AuthService,AuthGuard,LoggedInGuard,{
     provide: HTTP_INTERCEPTORS, useClass:TokenInterceptorService , multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
