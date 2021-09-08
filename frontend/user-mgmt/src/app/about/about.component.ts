import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  sampleText = "Testing sentence...";

  bigText = "Testing Testing Testing testing Testing Testing Testing Testing testing Testing Testing Testing Testing testing Testing";

  today: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
