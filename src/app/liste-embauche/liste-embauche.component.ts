import { Personne } from './../Model/Personne';
import { EmbaucheService } from './../services/embauche.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-embauche',
  templateUrl: './liste-embauche.component.html',
  styleUrls: ['./liste-embauche.component.css']
})
export class ListeEmbaucheComponent implements OnInit {
  personnes: Personne[];
  constructor(private embaucheService: EmbaucheService) {

   }

  ngOnInit() {
    this.personnes = this.embaucheService.getPersonne();
  }

  removeformembauche(personne: Personne) {
    this.embaucheService.deletePersonne(personne);
  }

}
