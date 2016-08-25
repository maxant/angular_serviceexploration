import { Component, OnInit } from '@angular/core';
import { ModelService, Market } from '../model/model.service';
import { Router } from '@angular/router';

@Component({
  selector: 'menu',
  template: require('./menu.component.html'),
  styles: [require('./menu.component.css')],
  providers: [ModelService]
})
export class MenuComponent {

  constructor(
    private modelService: ModelService,
    private router: Router
  ) { }

  getModel(){
    return this.modelService.getModel();
  }

  marketSelected(market: Market){
    this.router.navigate(['/market', market.id]);
  }

}
