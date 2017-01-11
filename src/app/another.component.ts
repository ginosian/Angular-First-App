import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-another',
  template: `
    <p>
      another also Works!
    </p>
  `,
  styles: []
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
