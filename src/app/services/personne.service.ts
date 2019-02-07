import { Personne } from './../Model/Personne';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  personnes: Personne [];
  constructor() {
    this.personnes = [
      new Personne(
                   1,
                   'jamel',
                   'nefzi',
                   'sof eng',
                   '32',
                   'rotating_card_profile2.png'
      ),
      new Personne(
                 2,
                 'takki',
                 'nefzi',
                 'sof eng',
                 '10',
                 'rotating_card_profile3.png'

            ),
            new Personne(
              3,
              'sara',
              'dridi',
              'pharmacie',
              '10',
              'rotating_card_profile.png'

         )]
   }

   getPersonne() {
     return this.personnes;
   }

   findPersonneById(id) {
     this.personnes.forEach(
       (value , index) => {
          if (value.id === id) {
            return  Personne;
          }
       }
     );
     return null;
   }
}
