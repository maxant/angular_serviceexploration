import { Component, OnInit } from '@angular/core';

var css = require('./header.component.css');
console.log("CSS IS " + css);

@Component({
  selector: 'header',
  template: require('./header.component.html'),
  styles: [require('./header.component.css')]
})
export class HeaderComponent {
}

