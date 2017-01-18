import { Component} from '@angular/core';

@Component({
  selector: 'my-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  constructor(
      public id: number,
      public name: string) { }

}
