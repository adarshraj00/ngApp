import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../register.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  toggleview:boolean=false;
  constructor(private auth:AuthService,public router:Router,public http:HttpClient,public reg:RegisterService) { }
  user:any
  ngOnInit(): void {
    console.log(this.user);
    this.auth.getData().subscribe((res)=>{
      console.log(res);
      this.user=res;
    },(err)=>console.log(err));
  }
  create(){
    this.router.navigate(['/create']);
  }
  view(){
    this.toggleview=!this.toggleview;
    if(this.toggleview){
    const data=this.reg.getdata().subscribe(
      (res)=>{
        const stringifyData=JSON.stringify(res);
        const parsedData=JSON.parse(stringifyData);
        this.data=parsedData;
        console.log(this.data);
      },
      (err)=>{
        console.log(err);
    })
    }
  }
  public captureScreen()  
  {  
    const data = document.getElementById('test')!;  //Id of the table
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      let imgWidth = 208;   
      let pageHeight = 295;    
      let imgHeight = canvas.height * imgWidth / canvas.width;  
      let heightLeft = imgHeight;  

      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      let position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('myresume.pdf'); // Generated PDF   
    });  
  }  
}
