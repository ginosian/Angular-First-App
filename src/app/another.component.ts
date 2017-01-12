import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-another',
  template: `
    <article></article>
  `,
  styles: [`
      article{
        border: 1px solid black;
      }
   `]
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
