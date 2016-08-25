import { Injectable } from '@angular/core';

export class Market {
    id: string;
    name: string;
    marketValue: number;
}

@Injectable()
export class ModelService {
  private model = {
    markets: [
        {
            id: '1',
            name: 'market1',
            marketValue: 100.009
        },
        {
            id: '2',
            name: null,
            //no name on purpose, to test using ng-if
            marketValue: 200.01
        }
    ]
  };

  getModel(){
    return this.model;
  }
}

