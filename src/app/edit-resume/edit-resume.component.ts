import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { RegisterService } from '../register.service';
import { HelperServiceService } from '../helper-service.service';
@Component({
  selector: 'app-edit-resume',
  templateUrl: './edit-resume.component.html',
  styleUrls: ['./edit-resume.component.css'],
})
export class EditResumeComponent implements OnInit {
  user: any;
  resume: FormGroup;
  formField: any;
  type!: string;
  constructor(
    public auth: AuthService,
    public form: FormBuilder,
    public reg: RegisterService,
    public help: HelperServiceService
  ) {
    this.help.subjectsec.subscribe((data) => {
      console.log(data, 'Fff');
      this.type = data;
    });
    this.resume = this.form.group({
      personal: this.form.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.minLength(10)]],
        address: [''],
      }),
      education: this.form.array([]),
      work: this.form.array([]),

      projects: this.form.array([]),
      skills: [''],
    });
  }

  ngOnInit(): void {
    this.reg.getdata().subscribe(
      (res) => {
        console.log(res);
        this.user = res;
        console.log(this.user.email);
        this.resume.patchValue({
          personal: {
            name: this.user.personal.name,
            email: this.user.personal.email,
            phone: this.user.personal.phone,
            address: this.user.personal.address,
          },
          skills: this.user.skills,
        });
        this.user.education.map((item: any) => {
          this.education.push(
            this.form.group({
              school: item.school,
              major: item.major,
              degree: item.degree,
              CGPA: item.CGPA,
            })
          );
        });
        this.user.work.map((item: any) => {
          this.work.push(
            this.form.group({
              profile: item.profile,
              company: item.company,
              desc: item.desc,
            })
          );
        });
        this.user.projects.map((item: any) => {
          this.projects().push(
            this.form.group({
              name: item.name,
              desc: item.desc,
            })
          );
        });
      },
      (err) => {}
    );
  }
  fn() {
    this.help.subject.next(this.resume.value);
  }
  projects() {
    return this.resume.get('projects') as FormArray;
  }
  get work() {
    return this.resume.get('work') as FormArray;
  }
  addWork() {
    this.work.push(
      this.form.group({
        profile: ['type job profile'],
        company: ['your company'],
        desc: ['describe your role'],
      })
    );
    this.fn();
    console.log(this.work);
  }
  removeWork(i: any) {
    this.work.removeAt(i);
    this.fn();
  }
  addProject() {
    this.projects().push(
      this.form.group({
        name: ['title of your project'],
        desc: ['describe your project'],
      })
    );
    console.log(this.projects());
    this.fn();

  }
  removeProject(i: any) {
    this.projects().removeAt(i);
    this.fn();
  }
  get education() {
    return this.resume.get('education') as FormArray;
  }
  addEducation() {
    this.education.push(
      this.form.group({
        school: ['type school name'],
        major: ['major?'],
        degree: ['your degree'],
        CGPA: ['cgpa here'],
      })
    );
    console.log(this.education);
    this.fn();
  }
  removeEducation(i: any) {
    this.education.removeAt(i);
    this.fn();
  }
}
