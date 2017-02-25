import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { EventModel } from "./event.service";

@Component({
  template: require("./event.component.html")
})
export class EventComponent implements OnInit {

  events: EventModel[];

  constructor(
    protected route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.forEach((data: {events: EventModel[]}) => {
      this.events = data.events;
    });
  }

}

