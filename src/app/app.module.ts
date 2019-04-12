import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { NavBarMeComponent } from './nav-bar-me/nav-bar-me.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDataComponent,
    NavBarMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
