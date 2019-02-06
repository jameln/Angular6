import { Component, OnInit, Input} from '@angular/core';
import { Personne } from './../Model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  @Input() person = Personne;
  constructor() { }

  ngOnInit() {
  }
  sendtodetails(param) {
    this.person = param;
  }
}
