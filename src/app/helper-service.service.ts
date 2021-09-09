import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperServiceService {
  subject=new Subject<any>();
  subjectsec=new Subject<any>();
  constructor() { }
}
