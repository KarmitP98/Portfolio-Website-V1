import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable( {
               providedIn: 'root'
             } )
export class ScrollService {

  inScene: BehaviorSubject<boolean[]> = new BehaviorSubject<boolean[]>( [ true, false, false, false ] );
  scenes: boolean[] = [ true, false, false, false ];

  constructor() {
    const screenY = window.screenY;

    window.addEventListener( 'scroll', ( e ) => {
      const YPos = window.scrollY;

      this.scenes[0] = YPos >= 0 && YPos <= screenY * 1.5;
      this.scenes[1] = YPos >= screenY && YPos <= screenY * 2.5;
      this.scenes[2] = YPos >= screenY * 2 && YPos <= screenY * 3.5;
      this.scenes[3] = YPos >= screenY * 3 && YPos <= screenY * 4.5;

      this.inScene.next( this.scenes );
    } );
  }

}
