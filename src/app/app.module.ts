import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import{HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { HomeComponent } from './home/home.component';
import { LoggedInGuard } from './logged-in.guard';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { TrendsComponent } from './trends/trends.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { ResumeComponent } from './resume/resume.component';
import { ResumesComponent } from './resumes/resumes.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    EditDetailsComponent,
    TrendsComponent,
    ResumeComponent,
    ResumesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,AuthGuard,LoggedInGuard,{
     provide: HTTP_INTERCEPTORS, useClass:TokenInterceptorService , multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
