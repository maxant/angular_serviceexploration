import { Component, OnInit } from "@angular/core";
import { ModelService } from "../model/model.service";

@Component({
  selector: "event-app",
  template: require("./event.component.html")
})
export class EventComponent implements OnInit {

  events: [any];

  constructor(
    private modelService: ModelService
  ) { }

  ngOnInit() {
      this.events = [
          {
              title: "My first event",
              location: "Eversons Fry House",
              date: "2017-02-17T21:00:00.000"
          },
          {
              title: "My second event",
              location: "Shakin Pancakes",
              date: "2017-02-18T22:00:00.000"
          }
      ];
  }

}

