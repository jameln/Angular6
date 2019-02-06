import { Personne } from './../Model/Personne';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() personne = Personne;
  @Output() pr = new EventEmitter();

  constructor() { }
  ngOnInit() {
  }

  sendDetails(p) {
    // console.log(this.personne);
    this.pr.emit(p);
  }
}
