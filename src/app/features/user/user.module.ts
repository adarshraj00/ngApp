
import { HomeComponent } from './../../core/components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { LoggedInGuard } from 'src/app/core/guards/logged-in.guard';



const routes:Routes = [
    {
      path:'',component:UserComponent,children:[
        {path:'login',component:LoginComponent,canActivate:[LoggedInGuard]},  
        {path:'register',component:RegisterComponent ,canActivate:[LoggedInGuard]},
        {path:'editdetails',component:EditDetailsComponent,canActivate:[AuthGuard]},
      ],
    }
]

@NgModule({
  declarations: [LoginComponent,RegisterComponent,EditDetailsComponent, UserComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[LoginComponent,RegisterComponent,EditDetailsComponent,RouterModule]
})
export class UserModule { 
  constructor(){
    console.log("User Module Loaded");
  }
}
