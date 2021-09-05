import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {
  
  // Step 1: make age custom property
  @Input() age = 20; //@input() is making age as custom property to the app-cpb selector
  // step 2: refer concepts.comp.html

  constructor() { }

  ngOnInit(): void {
  }

}
