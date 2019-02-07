import { Personne } from './../Model/Personne';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  embauche: Personne[];
  constructor() {
    this.embauche = [];
  }
  getPersonne() {
    return this.embauche;
  }
  addPersonne(personne: Personne) {
    const index = this.embauche.indexOf(personne);
    if (index >= 0 ) {
      alert('Deja embauché');
    } else {
      this.embauche.push(personne);
    }
  }
  deletePersonne(personne: Personne) {
    const index = this.embauche.indexOf(personne);
    if ( index < 0 ) {
      alert('error');
    } else {
      this.embauche.splice(index, 1);
    }
  }

}
