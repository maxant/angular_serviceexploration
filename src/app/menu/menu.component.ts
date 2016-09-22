import { Component, OnInit } from '@angular/core';
import { ModelService } from '../model/model.service';
import { Market } from '../market.integration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'menu',
  template: require('./menu.component.html'),
  styles: [require('./menu.component.css')]
})
export class MenuComponent implements OnInit {

  markets: Market[]

  constructor(
    private modelService: ModelService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.markets = this.modelService.getModel().markets; //putting this in the constructor would be too early, since the modelService only has its markets AFTER initialisation of the components referenced in the routings!
  }

  marketSelected(market: Market){
    this.router.navigate(['/market', market.id]);
  }

}
