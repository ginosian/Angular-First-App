import {Component} from '@angular/core';
import {OnInit} from "@angular/core";
import {HeroComponent} from "./hero/hero.component";
import {HeroService} from "../../service/hero-service/hero.service";
import {Router} from "@angular/router";

@Component({
    selector: 'heroes-component',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    providers: [HeroService]
})
export class HeroesComponent implements OnInit{

    title = "Heroes";
    heroesFromService : HeroComponent[];
    selectedHero: HeroComponent;

    constructor(
        private router: Router,
        private heroService : HeroService
    ) {
        this.title = 'Tour of Heroes';
    }

    onSelect(hero: HeroComponent): void {
        this.selectedHero = hero;
    }

    getHeroes() : void{
        this.heroService.getHeroesSlowly()
            .then(heroesFromPromise => this.heroesFromService = heroesFromPromise);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    goToDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}

