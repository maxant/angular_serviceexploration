import { Component } from '@angular/core';
import { ModelService } from '../model/model.service';

@Component({
  template: require('./home.component.html'),
  styles: [require('./home.component.css')],
  providers: [ModelService]
})
export class HomeComponent {

  constructor(private modelService: ModelService) { }

  getMarketSize(): number {
    return this.modelService.getModel().markets.length;
  }

}

