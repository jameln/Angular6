import { EmbaucheService } from './../services/embauche.service';
import { Personne } from './../Model/Personne';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personne = Personne;
  constructor(private embaucheService: EmbaucheService) {
   }

  ngOnInit() {
    this.personne = null;
  }
  addEmbauche(personne) {
    this.embaucheService.addPersonne(personne);
  }
}
