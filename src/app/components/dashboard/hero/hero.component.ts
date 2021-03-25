import { Component, OnInit } from '@angular/core';

@Component( {
              selector: 'app-hero',
              templateUrl: './hero.component.html',
              styleUrls: [ './hero.component.scss' ]
            } )
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollDown(): void {
    window.scroll( { behavior: 'smooth' } );
    window.scrollTo( 0, window.innerHeight );
  }
}
