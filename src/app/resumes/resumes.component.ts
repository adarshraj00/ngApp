import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumes',
  templateUrl: './resumes.component.html',
  styleUrls: ['./resumes.component.css']
})
export class ResumesComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  create(){
    this.router.navigate(['/resume/create']);
  }
}
