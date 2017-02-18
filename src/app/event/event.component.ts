import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  template: require("./event.component.html")
})
export class EventComponent implements OnInit {

  events: any[];

  constructor(
    protected route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.forEach((data: {events: any[]}) => {
      this.events = data.events;
    });
  }

}

