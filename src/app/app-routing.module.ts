import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MyjobsPageComponent } from './myjobs-page/myjobs-page.component';
import { AboutmePageComponent } from './aboutme-page/aboutme-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/aboutme', pathMatch: 'full'},
  { path: 'aboutme', component: AboutmePageComponent},
  { path: 'jobs', component: MyjobsPageComponent }
];

export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
