import { Routes, RouterModule } from '@angular/router';

import { MarketComponent }      from './market/market.component';
import { HomeComponent }      from './home/home.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },{
    path: 'login',
    component: MarketComponent //TODO
  },{
    path: 'market/:id',
    component: MarketComponent
  },{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },{
    path: '**', //default path
    redirectTo: '/home'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
