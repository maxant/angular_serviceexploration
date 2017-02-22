import { Component, Input, OnInit } from "@angular/core";
import { MenuItem } from "primeng/primeng";

@Component({
  selector: "event-tile",
  template: require("./event.tile.component.html"),
  styles: [require("./event.tile.component.css")]
})
export class EventTileComponent implements OnInit {

  @Input() event: any;

  openCount: number = 0;

  items: MenuItem[];

  ngOnInit() {
        this.items = [
                { label: "Open", icon: "fa-download", command: this.open }
        ];
  }

  open(e: any) {
    e.originalEvent.stopPropagation();
    //TODO "this" is undefined when karma runs?!  this.openCount++;
    console.log("clicked open menu item");
  }

}

