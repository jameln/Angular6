import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  @Input() borderColor = 'red';
  @Input() textColor = 'green';
  tableColor = [
    'red',
    'gray',
    'green',
    'blue',
    'yellow',
    'black'
    ];
  @HostBinding('style.color') color = this.textColor;
  @HostBinding('style.border-color') bordor = this.borderColor;
  constructor() { }
  @HostListener('keypress') changeColor() {
    this.color = this.tableColor[Math.floor(Math.random() * (this.tableColor.length - 1))];
    this.bordor = this.tableColor[Math.floor(Math.random() * (this.tableColor.length - 1))];
  }
}
