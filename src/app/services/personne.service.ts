import { Personne } from './../Model/Personne';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  personnes: Personne [];
  apiLink = 'http://localhost:3000/api/personnes';
  constructor(private http: HttpClient) {
   }

   getPersonne() {
    return this.http.get<Personne []>(this.apiLink);
   }

   findPersonneById(id) {
     return this.personnes[id];
   }
}
