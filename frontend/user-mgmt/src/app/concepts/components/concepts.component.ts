import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  //public variables

  //String Interpolation
  appname = 'User Management App';
  buttonLabel = 'Click';

  // prop binding
  companyName = 'SOTI';

  //two way binding
  courseName = 'Angular';

  personAge = 100;

  dataReceivedFromChildComp = '';

  // Directives
  isLoggedIn = false;
  skillList = ['html', 'css', 'ts', 'ng'];

  constructor() { }

  ngOnInit(): void {
  }

  handleClickMe(event: any):void{
    // Task: change the label to clicked
    this.buttonLabel = "Clicked";
    // Task: disable the button on click
    event.target.disabled = "True";
  }

  // Step 6 of CEB: handle the custom event
  handleProfileLoaded(event: any) {
    console.log("handle Profile Loaded");
    console.log(event);
    this.dataReceivedFromChildComp = event.firstName;
  }

}
