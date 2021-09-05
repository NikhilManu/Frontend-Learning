import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="text-center">
      <hr>
      <app-menu>
        <li footer class="nav-item">
        <a class="nav-link" href="#">Back To Top</a>
        </li>
      </app-menu>
      <p class="grey"> This is component Specfic </p>
      <p class="red"> Copyright 2021 </p>
    </div>
  `,
  styles: [
    `.grey{
        color: grey
    }`
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
