import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showable = false;
  opened = false;

  constructor() { }

  ngOnInit(): void {
    this.showable = window.innerWidth <= 1300;
    window.addEventListener('resize', () => {
      this.showable = window.innerWidth <= 1300;
      // tslint:disable-next-line:no-unused-expression
      !this.showable ? this.opened = false : null;
    });

    window.addEventListener('scroll', () => this.opened = false);

  }


}
