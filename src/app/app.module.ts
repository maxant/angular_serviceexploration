import { NgModule }             from "@angular/core";
import { ErrorHandler }         from "@angular/core";
import { BrowserModule }        from "@angular/platform-browser";
import { FormsModule }          from "@angular/forms";
import { HttpModule }           from "@angular/http";
import { AppComponent }         from "./app.component";
import { MyErrorHandler }       from "./error.handler";
import { HeroDetailComponent }  from "./hero-detail.component";
import { HeaderComponent }      from "./header/header.component";
import { MenuComponent }        from "./menu/menu.component";
import { MarketComponent }      from "./market/market.component";
import { HomeComponent }        from "./home/home.component";
import { routing }              from "./app.routing";
import { MarketResolver }       from "./market.resolver";
import { EventResolver }        from "./event/event.resolver";
import { EventComponent }       from "./event/event.component";
import { EventTileComponent }   from "./event/event.tile.component";

import { MarketIntegrationService }         from "./market.integration.service";
import { EventIntegrationService }         from "./event/event.integration.service";

import { ButtonModule, MenuModule } from "primeng/primeng";

import { KeycloakService } from "./keycloak/keycloak.service";
import { KeycloakHttp, KEYCLOAK_HTTP_PROVIDER } from "./keycloak/keycloak.http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,

    // primeng
    ButtonModule,
    MenuModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeaderComponent,
    MenuComponent,
    MarketComponent,
    HomeComponent,
    EventComponent,
    EventTileComponent
  ],

  providers: [
    MarketIntegrationService, // singleton
    MarketResolver, // coz putting it in the app aint good enough
    EventIntegrationService, // singleton
    EventResolver, // coz putting it in the app aint good enough
    {provide: ErrorHandler, useClass: MyErrorHandler},
    KeycloakService,
    KEYCLOAK_HTTP_PROVIDER
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
