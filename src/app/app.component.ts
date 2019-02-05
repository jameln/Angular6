import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdvanciaAngular';
  cp = 'yellow';
  setValue(value) {
    console.log('ee' , value);
    this.cp = value;
  }
}
