import { PersonneService } from './../services/personne.service';
import { ActivatedRoute } from '@angular/router';
import { Personne } from './../Model/Personne';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  personne: Personne[];
  index;
  constructor(private activatedRoute: ActivatedRoute, private personneService: PersonneService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param) => {
        this.index = param.id;
        this.personne = this.personneService.findPersonneById(this.index);
      }
    )
  }

}
