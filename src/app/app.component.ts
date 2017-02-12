import { Component, OnInit } from "@angular/core";
import { Hero } from "./hero";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroService } from "./hero.service";
import { OtherService } from "./other.service";
import { ModelService } from "./model/model.service";
import { MarketIntegrationService } from "./market.integration.service";

import * as _ from "lodash";

import "../styles.css"; // import, so that webpack packs it up

@Component({
  selector: "app",
  template: require("./app.component.html"),
  styles: [require("./app.component.css")],
  providers: [HeroService, OtherService, ModelService]
})
export class AppComponent implements OnInit {
  title = "Tour of Heroes";
  heroes: Hero[];
  selectedHero: Hero;
  clickCount: number = 0;

  constructor(
    private heroService: HeroService,
    private marketIntegrationService: MarketIntegrationService,
    private modelService: ModelService
  ) { }

  isWaiting() {
    return this.marketIntegrationService.isWaiting;
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();

    console.log("app.component init - using lodash version " + _.VERSION);
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  onclick() {
    this.clickCount++;
  }
}

