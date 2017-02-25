import { Injectable } from "@angular/core";

import * as _ from "lodash";

export interface EventModel {
    title?: string;
    location?: string;
    date?: Date;
}

@Injectable()
export class EventService {

  constructor() { }

  /** returns an array of errors or an empty array if there are none. */
  validate(events: EventModel[]): string[] {

    return _(events)
    .map(event => {
        if(!event.title){
            return "ch.maxant.tullia.event.validation.error.4553.invalid.name";
        }
    }).compact().value();
  }

}
