import { Component, OnInit } from "@angular/core";

const css = require("./header.component.css");

@Component({
  selector: "header",
  template: require("./header.component.html"),
  styles: [require("./header.component.css")]
})
export class HeaderComponent {
}

