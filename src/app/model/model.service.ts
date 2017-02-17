import { Injectable } from "@angular/core";
import { Market }     from "../market.integration.service";

export class Model {
  markets: Market[] = [];
}

@Injectable()
export class ModelService {

  private model = new Model();

  getModel() {
    return this.model;
  }

  setMarkets(markets: Market[]) {
    this.model.markets = markets;
  }

}

