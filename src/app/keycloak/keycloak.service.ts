// based on https://github.com/keycloak/keycloak/tree/master/examples/demo-template/angular2-product-app/

import {Injectable} from "@angular/core";

declare var Keycloak: any;

@Injectable()
export class KeycloakService {
  static auth: any = {};

  static init(): Promise<any> {
//    {
//      url: environment.keykloakBaseUrl,
//      realm: 'demo',
//      clientId: 'angular2-product',
//    }
console.log("0");

    const keycloakJson = {
                           "realm": "tullia",
                           "realmId": "tullia",
                           "clientId": "app",
                           "url": "https://tullia.maxant.ch/auth",
//                           "auth-server-url": "https://tullia.maxant.ch/auth",
//                           "ssl-required": "external",
//                           "resource": "app",
//                           "public-client": true,
//                           "use-resource-role-mappings": true,
                         };


    const keycloakAuth: any = Keycloak(keycloakJson);

    KeycloakService.auth.loggedIn = false;

    return new Promise((resolve, reject) => {
console.log("A");
      keycloakAuth.init({ onLoad: "login-required" })
      .success(() => {
console.log("B");
        KeycloakService.auth.loggedIn = true;
        KeycloakService.auth.authz = keycloakAuth;
        KeycloakService.auth.logoutUrl = keycloakAuth.authServerUrl + "/realms/" + keycloakJson.realm + "/protocol/openid-connect/logout?redirect_uri=" + document.baseURI;
        resolve();
      })
      .error(() => {
console.log("C");
        reject();
      });
    });
  }

  logout() {
    console.log("*** LOGOUT");
    KeycloakService.auth.loggedIn = false;
    KeycloakService.auth.authz = null;

    window.location.href = KeycloakService.auth.logoutUrl;
  }

  getToken(): Promise<string> {
console.log("D");
    return new Promise<string>((resolve, reject) => {
console.log("E");
      if (KeycloakService.auth.authz.token) {
console.log("F");
        KeycloakService.auth.authz
          .updateToken(5)
          .success(() => {
console.log("H");
            resolve(<string>KeycloakService.auth.authz.token);
          })
          .error(() => {
console.log("I");
            reject("Failed to refresh token");
          });
      } else {
console.log("G");
        reject("Not loggen in");
      }
    });
  }
}