import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-me',
  templateUrl: './nav-bar-me.component.html',
  styleUrls: ['./nav-bar-me.component.scss']
})
export class NavBarMeComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'About me',
        link: './aboutme',
        index: 0
      },
      {
        label: 'My last jobs',
        link: './jobs',
        index: 1
      }
    ];
  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
