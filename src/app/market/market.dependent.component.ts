import { OnInit } from '@angular/core';
import { ModelService } from '../model/model.service';
import { Market } from '../market.integration.service';
import { Router, ActivatedRoute } from '@angular/router';

export class MarketDependentComponent implements OnInit {

  constructor(protected route: ActivatedRoute,
              protected modelService: ModelService) {
  }

  ngOnInit() {
    //retrieve resolved data from the route. see routing which defines a resolver. this init code is only called when the promise from the resolver is completed.
    this.route.data.forEach((data: {markets: Market[]}) => {
      this.modelService.setMarkets(data.markets);
    });
  }
}
