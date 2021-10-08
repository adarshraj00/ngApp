import { Component } from '@angular/core';

import { LoadingBarService } from '@ngx-loading-bar/core';
import { AuthService } from './core/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth:AuthService,private loadingBar: LoadingBarService) { }

  title = 'ngApp';
}
