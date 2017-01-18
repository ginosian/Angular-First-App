import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeroesComponent } from './app-components/heroes-component/heroes.component';
import { AppComponent } from './app/app.component';
import {RouterModule} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import {HeroService} from "./service/hero-service/hero.service";
import {HeroDetailComponent} from "./app-components/heroes-component/hero-detail/hero-detail.component";

@NgModule({
  declarations: [
      AppComponent,
      HeroesComponent,
      HeroDetailComponent,
      DashboardComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot([
          {
              path: 'heroes',
              component: HeroesComponent
          },
          {
              path: 'dashboard',
              component: DashboardComponent
          },
          {
              path: '',
              redirectTo: '/dashboard',
              pathMatch: 'full'
          },
          {
              path: 'detail/:id',
              component: HeroDetailComponent
          },
      ])

  ],
  providers: [
      HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
