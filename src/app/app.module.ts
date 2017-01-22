import { NgModule }             from "@angular/core";
import { BrowserModule }        from "@angular/platform-browser";
import { FormsModule }          from "@angular/forms";
import { HttpModule }           from "@angular/http";
import { AppComponent }         from "./app.component";
import { HeroDetailComponent }  from "./hero-detail.component";
import { HeaderComponent }      from "./header/header.component";
import { MenuComponent }        from "./menu/menu.component";
import { MarketComponent }      from "./market/market.component";
import { HomeComponent }        from "./home/home.component";
import { routing }              from "./app.routing";
import { MarketResolver }       from "./market.resolver";

import { MarketIntegrationService }         from "./market.integration.service";

// TEMPORARY, TO REPLACE A REAL BACK END SERVICE:
// Imports for loading & configuring the in-memory web api
import { XHRBackend }                        from "@angular/http";
import { InMemoryBackendService, SEED_DATA } from "angular2-in-memory-web-api";
import { MockMarkets }                       from "./mock.markets";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeaderComponent,
    MenuComponent,
    MarketComponent,
    HomeComponent
  ],

  providers: [
    MarketIntegrationService, // singleton
    MarketResolver, // coz putting it in the app aint good enough

    // TEMPORARY TO REPLACE A REAL BACK END SERVICE:
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: MockMarkets }
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
