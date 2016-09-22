import { Component, OnInit } from '@angular/core';
import { ModelService } from '../model/model.service';
import { Market } from '../market.integration.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MarketDependentComponent } from '../market/market.dependent.component';

@Component({
  template: require('./home.component.html'),
  styles: [require('./home.component.css')]
})
export class HomeComponent extends MarketDependentComponent {

  constructor(route: ActivatedRoute,
              modelService: ModelService) {
    super(route, modelService);
  }

  getMarkets() {
    return this.modelService.getModel().markets;
  }
}
