import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RegisterService } from '../register.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { NgSwitch } from '@angular/common';
import { HelperServiceService } from '../helper-service.service';
import { LoggedInGuard } from '../logged-in.guard';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any;
  toggleview: boolean = false;
  constructor(
    private auth: AuthService,
    public router: Router,
    public http: HttpClient,
    public reg: RegisterService,
    public help:HelperServiceService
  ) {}
  @ViewChild('name', { static: false })
  nameRef!: ElementRef;
  user: any;
  ngOnInit(): void {
    //console.log(this.user);
    this.help.subject.subscribe(data=>{
      this.data=data;
    })
    this.auth.getData().subscribe(
      (res) => {
        // console.log(res);
        this.user = res;
      },
      (err) => {}
    );
  }
  create() {
    this.router.navigate(['/create']);
  }
  view() {
    this.toggleview = !this.toggleview;
    if (this.toggleview) {
      const data = this.reg.getdata().subscribe(
        (res) => {
          const stringifyData = JSON.stringify(res);
          const parsedData = JSON.parse(stringifyData);
          this.data = parsedData;
          // console.log(this.data);
          setTimeout(() => {
            console.log(this.nameRef);
          }, 1000);
        },

        (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 404) {
              alert('create a resume first');
              this.toggleview = false;
            }
            //console.log(err);
          }
        }
      );
    }
  }
  save() {
    this.reg.register(this.data).subscribe(
      (err) => {
        console.log(err);
      },
      (res) => {
        console.log(res);
        alert("saved");
      }
    );
  }
  public captureScreen() {
    const data = document.getElementById('test')!; //Id of the table
    html2canvas(data).then((canvas) => {
      // Few necessary setting options
      let imgWidth = 208;
      // let imgHeight = canvas.height * imgWidth / canvas.width;
      //let heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      let position = 0;
      let imgHeight = pdf.internal.pageSize.height;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('myresume.pdf'); // Generated PDF
    });
  }

  public handle(typeOfdata: string) {
    console.log(typeOfdata);
    
    this.help.subjectsec.next(typeOfdata);
  }
}
