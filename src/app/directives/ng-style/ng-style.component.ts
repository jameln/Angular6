import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  cl = 'red';
  fl = 'arial';
  sz = '5px';
  est = true;
  ca = false;
  cls1 = true;
  cls2 = false;
  cls3 = false;
  constructor() { }

  ngOnInit() {
  }
  setcolor(param) {
    // console.log(param.value);
    this.cl = param.value;
  }
  setfamily(param) {
    // console.log(param.value);
    this.fl = param.value;
  }
  setsize(param) {
    // console.log(param);
    this.sz = param.value;
  }
  switchcolor() {
    this.est = !this.est;
    this.ca = !this.ca;
  }
  setweight(param) {
    switch (param.value) {
      case 'normal': {
        this.cls1 = true;
        this.cls2 = false;
        this.cls3 = false;
        break;
      }
      case 'lighter': {
         this.cls1 = false;
         this.cls2 = true;
         this.cls3 = false;
         break;
      }
      case 'bolder': {
        this.cls1 = false;
        this.cls2 = false;
        this.cls3 = true;
        break;
     }
      default: {
         break;
      }
   }

  }
}
