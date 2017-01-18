import { Injectable } from '@angular/core';
import {HEROES} from "../../mocks/mock-heroes";
import {HeroComponent} from "../../app-components/heroes-component/hero/hero.component";

@Injectable()
export class HeroService {


    getHeroes(): Promise<HeroComponent[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<HeroComponent[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }

    getHero(id: number): Promise<HeroComponent> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

}
