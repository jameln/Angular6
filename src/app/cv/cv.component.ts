import { Component, OnInit, Input} from '@angular/core';
import { Personne } from './../Model/Personne';
import { MyserviceService } from '../services/myservice.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  @Input() person = Personne;
  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
      this.myservice.sayHello();
  }
  sendtodetails(param) {
    this.person = param;
  }
}
