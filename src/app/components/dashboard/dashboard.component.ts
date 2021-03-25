import { Component, OnInit } from '@angular/core';

@Component( {
              selector: 'app-dashboard',
              templateUrl: './dashboard.component.html',
              styleUrls: [ './dashboard.component.scss' ]
            } )
export class DashboardComponent implements OnInit {

  scenes: boolean[] = [ true, false, false, false ];

  constructor() { }

  ngOnInit(): void {
    const screenY = window.innerHeight;
    console.log( screenY );

    window.addEventListener( 'scroll', ( e ) => {
      const YPos = window.scrollY;
      this.scenes[0] = YPos >= 0 && YPos <= screenY * 1.5;
      this.scenes[1] = YPos >= screenY * 0.5 && YPos <= screenY * 2;
      this.scenes[2] = YPos >= screenY * 1.2 && YPos <= screenY * 3;
      this.scenes[3] = YPos >= screenY * 2.2 && YPos <= screenY * 4;
      // this.inScene.next(this.scenes);
    } );
  }

}
