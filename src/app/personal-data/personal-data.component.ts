import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

  filmFavorite: Array<any>;

  constructor( private firestoreService: FirebaseService) { }

  ngOnInit() {
    this.firestoreService.getFilmsFavorite()
    .subscribe(dataSnapshot => {
      this.filmFavorite = dataSnapshot;
      });
  }

}
