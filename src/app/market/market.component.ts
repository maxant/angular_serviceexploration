import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { ModelService, Market } from '../model/model.service';

@Component({
  //TODO no need to have this, coz its only ever used by the routing? selector: 'market',
  template: require('./market.component.html'),
  styles: [require('./market.component.css')],
  providers: [ModelService]
})
export class MarketComponent implements OnInit, OnDestroy {

  private market: Market;
  private id: string;
  private sub: Subscription;

  constructor(
    private modelService: ModelService,
    private route: ActivatedRoute
  ) {
    //if caching of the component isn't an issue, and you can live with having to go to a difference component before showing a different model on this one, then either of these is fine:
    //route.params.subscribe( (p: any) => this.id = p.id );
    //this.id = this.route.snapshot.params['id'];
    // then you'd do this here in the constructor:       this.market = this.modelService.getModel().markets.find(m => m.id == this.id);
    // or you'd even do all this below in the onInit, in order to make testing easier?
    //otherwise, need to subscribe and unsubscribe! see ngOnInit and ngOnDestroy below
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.market = this.modelService.getModel().markets.find(m => m.id == this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getMarket(): Market {
    return this.market;
  }

}

