import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceb',
  template: `
    <div>
      <p> CEB </p>
      <button type="button" (click)="handleSendData()"> Send Data Parent Comp </button>
    </div>
  `,
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step 1: Have the data in a variable to be sent to parent comp
  profileData: any = {
    firstName: 'Arun',
    city: 'Toronto',
    zip: 53444
  }

  // Step 2: creating an eventemitter Obj
  profileLoaded: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleSendData() {
    console.log('Sending data to Parent')
    // Step 4: Sneding the data through emit method
    this.profileLoaded.emit(this.profileData) 
  }
}
