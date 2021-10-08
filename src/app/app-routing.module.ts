import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { TrendsComponent } from './core/components/trends/trends.component';
import { AuthGuard } from './core/guards/auth.guard';

import { ResumeComponent } from './features/resume/resume/resume.component';
import { EditDetailsComponent } from './features/user/edit-details/edit-details.component';
import { LoginComponent } from './features/user/login/login.component';
import { RegisterComponent } from './features/user/register/register.component';


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
  // {
  //   path: 'user/login',
  //   loadChildren:()=>import('./features/user/user.module').then(m=>m.UserModule),
  //   canActivate: [LoggedInGuard]
  // },
  // {
  //   path: 'register',
  //   component:RegisterComponent,
  //   canActivate:[LoggedInGuard]
  // },
  {
    path:'user',
    loadChildren:()=>import('./features/user/user.module').then(m=>m.UserModule),
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
