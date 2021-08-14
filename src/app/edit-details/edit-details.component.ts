import { HttpErrorResponse } from '@angular/common/http';
import { unescapeIdentifier } from '@angular/compiler';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditDetailsComponent implements OnInit {
  user!: any;

  pass!: string;
  confirmPass!: string;
  oldPass: string = '';
  constructor(private auth: AuthService, privateref: ChangeDetectorRef) {
    console.log('front');
    this.auth.getData().subscribe(
      (res) => {
        // console.log(res);
        // console.log(typeof(JSON.stringify(res)));
        // console.log(typeof(res));
        this.user = res;
      },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          alert('update failed');
        }
      }
    );
  }

  ngOnInit(): void {}

  onClick(s: any) {
    if (this.oldPass !== this.user.password) {
      this.oldPass = '';
      alert('Old password is wrong');
      return;
    }
    if (s !== 'pass') {
      if (s == 'name') {
        if (this.user.name == '') {
          alert('Name cannot be empty');
          return;
        }
        this.auth.update({ name: this.user.name }).subscribe(
          (res) => {
            console.log(res);
            this.user = res;
            console.log(this.user.name);
            alert(`updated ${s}`);
          },
          (err) => {
            if (err instanceof HttpErrorResponse) {
              alert('update failed :user name already exists');
            }
          }
        );
      } else if (s == 'username') {
        if (this.user.userName == '') {
          alert('Username cannot be empty');
          return;
        }
        this.auth.update({ userName: this.user.userName }).subscribe(
          (res) => {
            console.log('fuck');

            console.log(res);
            this.user = res;
            //  this.user.name="test";
            alert(`updated ${s}`);
          },
          (err) => console.log(err)
        );
      } else if (s == 'email') {
        if (this.user.email == '') {
          alert('Email cannot be empty');
          return;
        } else {
          // const isValidEmail = (email: string) => {
          //   var re =
          //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          //   return re.test(email);
          // };
          // if (!isValidEmail(this.user.email)) {
          //   console.log("em");
          //   alert('Please enter a valid email address');
          //   return;
          // }
        }
        console.log(this.user.email, 'test');
        this.auth.update({ email: this.user.email }).subscribe(
          (res) => {
            console.log(res);
            this.user = res;
            alert(`updated ${s}`);
          },
          (err) => console.log(err)
        );
      } else if (s == 'contact') {
        if (this.user.contact == '') {
          alert('Contact cannot be empty');
          return;
        }
        this.auth.update({ contact: this.user.contact }).subscribe(
          (res) => {
            console.log(res);
            this.user = res;
            alert(`updated ${s}`);
          },
          (err) => console.log(err)
        );
      }
    } else {
      if (this.pass === '') {
        alert('Password cannot be empty');
        return;
      } else if (this.pass !== this.confirmPass) {
        alert("Passwords don't match");
      } else {
        this.auth.update({ password: this.pass }).subscribe(
          (res) => {
            console.log(res);
            this.user = res;
            alert('updated password');
          },
          (err) => console.log(err)
        );
      }
    }
  }
}

//(ngSubmit)="onSubmit(f.value)"
