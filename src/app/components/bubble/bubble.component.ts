import { Component, Input, OnInit } from '@angular/core';

@Component( {
              // tslint:disable-next-line:component-selector
              selector: 'bubble',
              templateUrl: './bubble.component.html',
              styleUrls: [ './bubble.component.scss' ]
            } )
export class BubbleComponent implements OnInit {

  @Input() top = 50;
  @Input() left = 50;
  @Input() animationDuration = 10;
  @Input() size = Math.round( Math.random() * 200 );
  @Input() opacity = 0.5;
  @Input() color = '#2F80ED';

  constructor() { }

  ngOnInit(): void {
  }

}
