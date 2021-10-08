import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditResumeComponent } from './edit-resume/edit-resume.component';
import { ResumeComponent } from './resume/resume.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [ResumeComponent,EditResumeComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[ResumeComponent,EditResumeComponent]
})
export class ResumeModule { }
