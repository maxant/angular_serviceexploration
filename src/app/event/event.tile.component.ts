import { Component, Input, OnInit } from "@angular/core";
import { MenuItem } from "primeng/primeng";
import { EventModel } from "./event.service";

@Component({
  selector: "event-tile",
  template: require("./event.tile.component.html"),
  styles: [require("./event.tile.component.css")]
})
export class EventTileComponent implements OnInit {

  @Input() event: EventModel;

  openCount: number = 0;

  items: MenuItem[];

  ngOnInit() {
        this.items = [
                { label: "Open", icon: "fa-download", command: (e: any) => this.open(e) } // v. important that we use a function and not just reference the method. otherwise karma tests fail because 'this' is undefined!
        ];
  }

  open(e: any) {
    e.originalEvent.stopPropagation();
    this.openCount++;
    console.log("clicked open menu item");
  }

}

