import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { EventModel } from "./event.service";

const url = "/events/events.json";

@Injectable()
export class EventIntegrationService {

  constructor(private http: Http) { }

  getEvents(): Promise<EventModel[]> {
    return this.http.get(url)
           .toPromise()
           .then(response => {
               console.log("got response from server: " + JSON.stringify(response));
               // TODO check on response.status === 200
               return response.json() as EventModel[]; // see how we use "as" to clarify the types from the server :-)
           }).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // TODO make nice error dialog for user
    return Promise.reject(error.message || error);
  }

}
