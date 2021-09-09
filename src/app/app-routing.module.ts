import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {AuthGuard} from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoggedInGuard } from './logged-in.guard';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { TrendsComponent } from './trends/trends.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'trends',
    component:TrendsComponent
  },
  {
    path: 'home',
     component:HomeComponent,
     canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component:LoginComponent,
    canActivate:[LoggedInGuard]
  },
  {
    path: 'register',
    component:RegisterComponent,
    canActivate:[LoggedInGuard]
  },
  {
    path:'edit',
    component:EditDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'create',
    component: ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
