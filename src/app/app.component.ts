import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth:AuthService,private loadingBar: LoadingBarService) { }

  title = 'ngApp';
}
