import { Routes, RouterModule } from "@angular/router";

import { MarketResolver }       from "./market.resolver";
import { MarketComponent }      from "./market/market.component";
import { HomeComponent }        from "./home/home.component";
import { EventResolver }        from "./event/event.resolver";
import { EventComponent }       from "./event/event.component";

const appRoutes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    resolve: {
      markets: MarketResolver
    }
  }, {
    path: "events",
    component: EventComponent,
    resolve: {
      events: EventResolver
    }
  }, {
    path: "login",
    component: MarketComponent // TODO
  }, {
    path: "market/:id",
    component: MarketComponent,
    resolve: {
      markets: MarketResolver
    }
  }, {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }, {
    path: "**", // default path
    redirectTo: "/home"
  }
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true}); // use hash so we don't need any clever stuff in nginx. TODO solve that later...
