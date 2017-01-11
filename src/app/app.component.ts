import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
    <h1>Inline other template</h1>
    <fa-other></fa-other>
    <fa-another></fa-another>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I changed it!';
}
