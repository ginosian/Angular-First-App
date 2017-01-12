import {Component} from '@angular/core';
import {OnInit} from "@angular/core";
import {HeroComponent} from "./hero/hero.component";
import {HeroService} from "./hero.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HeroService]
})
export class AppComponent implements OnInit{

    title = "";
    heroesFromService : HeroComponent[];
    selectedHero: HeroComponent;

    constructor( private heroService : HeroService) {
        this.title = 'Tour of Heroes';
        this.heroesFromService = this.heroService.getHeroes();
    }

    localHeroes = [
        new HeroComponent(1, 'Windstorm'),
        new HeroComponent(2, 'Bombasto'),
        new HeroComponent(3, 'Magneta'),
        new HeroComponent(4, 'Tornado')
    ];

    onSelect(hero: HeroComponent): void {
        this.selectedHero = hero;
    }

    getHeroes() : HeroComponent[]{
        this.heroesFromService = this.heroService.getHeroes();
        return this.heroesFromService;
    }


    ngOnInit(): void {
    }
}

