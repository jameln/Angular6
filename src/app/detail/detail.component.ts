import { PersonneService } from './../services/personne.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(
            private embaucheService: EmbaucheService,
            private activatedRoute: ActivatedRoute,
            private router: Router,
            private personneService: PersonneService
    ) {}

  ngOnInit() {
    this.personne = null;
  }
  addEmbauche(personne) {
    this.embaucheService.addPersonne(personne);
  }

  navigate(param) {
    console.log(param.id);
    this.router.navigate(['details/', param.id]);
  }
}
