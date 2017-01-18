import { Component, OnInit } from '@angular/core';
import {HeroComponent} from "../app-components/heroes-component/hero/hero.component";
import {HeroService} from "../service/hero-service/hero.service";

@Component({
  moduleId: 'module.id',
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    heroes: HeroComponent[] = [];

    constructor(private heroService: HeroService) { }

  ngOnInit() {
      this.heroService.getHeroes()
          .then(heroes => this.heroes = heroes.slice(1, 5));
  }

}
