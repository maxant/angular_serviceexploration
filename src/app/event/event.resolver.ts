import { Injectable } from "@angular/core";
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { EventIntegrationService } from "./event.integration.service";
import { EventModel } from "./event.service";

@Injectable()
export class EventResolver implements Resolve<EventModel[]> {

  private promise: Promise<EventModel[]>;

  constructor(private is: EventIntegrationService) { }

// a resolver is a singleton, so we can use it to cache the promise and avoid multiple calls to the backend. helps us implement lazy loading too.

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<EventModel[]> {
    if (!this.promise) {
      console.log("resolving events with a call to the back end...");
      this.promise = this.is.getEvents();
    } else {
        console.log("resolving events with existing promise");
    }
    return this.promise;
  }

}
