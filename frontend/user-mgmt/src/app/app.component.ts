import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // should be only one and is mandatory
  styleUrls: ['./app.component.scss'] // css - optional but can be multiple
})
export class AppComponent {
  title = 'user-mgmt';
}
