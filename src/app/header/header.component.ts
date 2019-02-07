import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToColor() {
    const link = ['color'];
    this.router.navigate(link);
  }

  gotoroute(param) {
    console.log(param);
    this.router.navigate([param]);
  }

}
