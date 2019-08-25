import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

import { FilmFavorite } from '../models/film-favorite/film-favorite';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

  filmFavorite: FilmFavorite[] = new Array();

  constructor( private firestoreService: FirebaseService) { }

  ngOnInit() {
    // all films
    this.firestoreService.getFilmsFavorite().subscribe((dataSnapshot) => {
      dataSnapshot.forEach((data: any) => {
        this.filmFavorite.push(
          new FilmFavorite(data.payload.doc.id, data.payload.doc.data().name, data.payload.doc.data().description,
          data.payload.doc.data().img)
        );
      });
    });
  }

}
