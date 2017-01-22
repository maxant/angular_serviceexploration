import { Injectable } from "@angular/core";
import { Market }     from "../market.integration.service";
import { Router }     from "@angular/router";

export class Model {
  markets: Market[] = [];
}

@Injectable()
export class ModelService {

  private model = new Model();

  constructor(
    private router: Router
  ) { }

  getModel() {
    return this.model;
  }

  setMarkets(markets: Market[]) {
    this.model.markets = markets;
  }

}

