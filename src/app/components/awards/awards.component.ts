import { Component, OnInit } from '@angular/core';
import { AwardModel } from '../../models/model';

declare var Rellax: any;

@Component( {
              selector: 'app-awards',
              templateUrl: './awards.component.html',
              styleUrls: [ './awards.component.scss' ]
            } )
export class AwardsComponent implements OnInit {

  awards: AwardModel[] = [
    { title: 'Angular Masterclass', altText: 'Udemy Logo', imageURL: 'assets/Images/logos_udemy-icon.png' },
    { title: 'Java Masterclass', altText: 'Udemy Logo', imageURL: 'assets/Images/logos_udemy-icon.png' },
    { title: 'Node.js Intermediate', altText: 'Udemy Logo', imageURL: 'assets/Images/logos_udemy-icon.png' },
    { title: 'Android Basics ', altText: 'Udacity Logo', imageURL: 'assets/Images/logos_udacity.png' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
