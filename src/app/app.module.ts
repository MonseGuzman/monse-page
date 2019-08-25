import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { NavBarMeComponent } from './nav-bar-me/nav-bar-me.component';
import { MyjobsPageComponent } from './myjobs-page/myjobs-page.component';
import { AboutmePageComponent } from './aboutme-page/aboutme-page.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { SingersComponentComponent } from './singers-component/singers-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDataComponent,
    NavBarMeComponent,
    MyjobsPageComponent,
    AboutmePageComponent,
    SingersComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
