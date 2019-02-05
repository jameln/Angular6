import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  @Input() couleur = 'red';
  @Output() setcouleur = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  changecolor() {
    console.log('test');
    this.setcouleur.emit(
      this.couleur
    );
}
}
