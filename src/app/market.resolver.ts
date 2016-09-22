import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Market, MarketIntegrationService } from './market.integration.service';

@Injectable()
export class MarketResolver implements Resolve<Market[]> {

  private promise: Promise<Market[]>;

  constructor(private mis: MarketIntegrationService) { }

  resolve(route: ActivatedRouteSnapshot): Promise<Market[]>|boolean {
    if(!this.promise){
      this.promise = this.mis.getMarkets();
    }
    return this.promise;
  }

}
