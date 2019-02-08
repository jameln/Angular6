import { PersonneService } from './../services/personne.service';
import { Personne } from './../Model/Personne';
import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  personnes: Personne [];
  @Output() pertofad = new EventEmitter();

  constructor(private pers: PersonneService) {
    this.pers.getPersonne().subscribe(
      (personne) => {
        this.personnes = personne;
      },
      (error) => {
        alert('yahya angular');
      }
    )
    // this.personnes = [
    //         new Personne(
    //                      1,
    //                      'jamel',
    //                      'nefzi',
    //                      'sof eng',
    //                      '32',
    //                      'rotating_card_profile2.png'
    //         ),
    //         new Personne(
    //                    2,
    //                    'takki',
    //                    'nefzi',
    //                    'sof eng',
    //                    '10',
    //                    'rotating_card_profile3.png'

    //               ),
    //               new Personne(
    //                 3,
    //                 'sara',
    //                 'dridi',
    //                 'pharmacie',
    //                 '10',
    //                 'rotating_card_profile.png'

    //            )]
   }

  sendDetailstofadher(personne) {
    this.pertofad.emit(personne);
  }
  ngOnInit() {
  }

}
