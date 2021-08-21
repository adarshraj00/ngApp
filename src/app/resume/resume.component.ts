import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  resume: FormGroup;

  constructor(
    public form: FormBuilder,
    public reg: RegisterService,
    public router: Router
  ) {
    this.resume = this.form.group({
      personal: this.form.group({
        name: ['', []],
        email: [''],
        phone: [''],
        address: [''],
      }),
      education: this.form.array([]),
      work: this.form.array([]),

      projects: this.form.array([]),
      skills: [''],
    });
  }

  ngOnInit(): void {}
  projects() {
    return this.resume.get('projects') as FormArray;
  }
  get work() {
    return this.resume.get('work') as FormArray;
  }
  addWork() {
    this.work.push(
      this.form.group({
        profile: [''],
        company: [''],
        desc: [''],
      })
    );
    console.log(this.work);
  }
  removeWork(i: any) {
    this.work.removeAt(i);
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
  removeProject(i: any) {
    this.projects().removeAt(i);
  }
  get education() {
    return this.resume.get('education') as FormArray;
  }
  addEducation() {
    this.education.push(
      this.form.group({
        school: [''],
        major: [''],
        degree: [''],
        CGPA: [''],
      })
    );
    console.log(this.education);
  }
  removeEducation(i: any) {
    this.education.removeAt(i);
  }
  onSubmit() {
    console.log(this.resume.value);
    this.reg.register(this.resume.value).subscribe(
      (err) => {
        console.log(err);
      },
      (res) => {
        console.log(res);
        this.router.navigate(['/home']);
      }
    );
  }
}
