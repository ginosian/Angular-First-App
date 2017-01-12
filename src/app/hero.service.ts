import { Injectable } from '@angular/core';
import {HEROES} from "./mocks/mock-heroes";
import {HeroComponent} from "./hero/hero.component";

@Injectable()
export class HeroService {

  getHeroes(): HeroComponent[]{
    return HEROES;
  }
}
