import { Injectable } from "@angular/core";
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Market, MarketIntegrationService } from "./market.integration.service";

@Injectable()
export class MarketResolver implements Resolve<Market[]> {

  private promise: Promise<Market[]>;

  constructor(private mis: MarketIntegrationService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Market[]> {
    if (!this.promise) {
      this.promise = this.mis.getMarkets();
    }
    return this.promise;
  }

}
