import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { AppModule } from "./app/app.module";
import { KeycloakService } from "./app/keycloak/keycloak.service";

if (process.env.ENV === "production") {
  enableProdMode();
}

KeycloakService.init()
  .then(() => platformBrowserDynamic().bootstrapModule(AppModule))
  .catch(e => {
    console.error(e);
    window.location.reload();
  });
