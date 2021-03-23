import {Component, OnInit} from '@angular/core';

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: ['./app.component.scss']
           })
export class AppComponent implements OnInit {
  title = 'Portfolio-Website-V1';

  scenes: boolean[] = [true, false, false, false];

  ngOnInit(): void {
    const screenY = window.innerHeight;
    console.log(screenY);

    window.addEventListener('scroll', (e) => {
      const YPos = window.scrollY;
      this.scenes[0] = YPos >= 0 && YPos <= screenY * 1.5;
      this.scenes[1] = YPos >= screenY * 0.5 && YPos <= screenY * 1.5;
      this.scenes[2] = YPos >= screenY * 1.5 && YPos <= screenY * 2.5;
      this.scenes[3] = YPos >= screenY * 2.5 && YPos <= screenY * 3.5;
      // this.inScene.next(this.scenes);
    });
  }


}
