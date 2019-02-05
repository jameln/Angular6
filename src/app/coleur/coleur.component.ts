import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coleur',
  templateUrl: './coleur.component.html',
  styleUrls: ['./coleur.component.css']
})
export class ColeurComponent implements OnInit {
  couleur = 'red';
  nom = 'Jamel';
  prenom  = 'NEFZI';
  job  = 'Software Engeneer';
  changecolor(param) {
    this.couleur = param;
  }
  constructor() { }

  ngOnInit() {
  }

}
