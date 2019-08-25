import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

import { Singers } from '../models/singer/singers';

@Component({
  selector: 'app-singers-component',
  templateUrl: './singers-component.component.html',
  styleUrls: ['./singers-component.component.scss']
})
export class SingersComponentComponent implements OnInit {

  singerFavorite: Singers[] = new Array();
  position = false;

  constructor(private firestoreService: FirebaseService) { }

  ngOnInit() {
    // all singers
    this.firestoreService.getSingersFavorite().subscribe((dataSnapshot) => {
      dataSnapshot.forEach((data: any) => {
        this.position = !this.position;
        this.singerFavorite.push(
          new Singers(data.payload.doc.id, data.payload.doc.data().name, data.payload.doc.data().photo, this.position, data.payload.doc.data().music)
        );
      });
    });
  }

  firstColumn(i: number) {
    if (i < 3) {
      return true;
    } else {
      return false;
    }
  }

  secondColumn(i: number) {
    if (i < 6 && i > 2) {
      return true;
    } else {
      return false;
    }
  }

}
