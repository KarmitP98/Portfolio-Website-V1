import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from './services/page.service';


@Component( {
              selector: 'app-root',
              templateUrl: './app.component.html',
              styleUrls: [ './app.component.scss' ]
            } )
export class AppComponent implements OnInit {
  title = 'Portfolio-Website-V1';


  constructor( private route: ActivatedRoute, public ps: PageService ) {}

  ngOnInit(): void {
  }

}
