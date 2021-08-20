import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  resume: FormGroup;

  constructor(public form: FormBuilder) {
    this.resume = this.form.group({
      personal: this.form.group({
        name: [''],
        email: [''],
        phone: [''],
        address: [''],
      }),
      education: this.form.group({
        school: [''],
        major: [''],
        degree: [''],
        CGPA: [''],
      }),
      work: this.form.group({
        profile: [''],
        company: [''],
        desc: [''],
      }),
      projects: this.form.array([]),
      // projects:{
      //   name:[''],
      //   desc:['']
      // },
      skills: [''],
    });
  }

  ngOnInit(): void {}
  projects() {
    return this.resume.get('projects') as FormArray;
  }
  addProject() {
    this.projects().push(
      this.form.group({
        name: [''],
        desc: [''],
      })
    );
    console.log(this.projects());
  }
}
