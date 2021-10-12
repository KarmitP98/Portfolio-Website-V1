import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
      })),
      state('void', style({
        opacity: 0
      })),
      transition('void => *', [
        animate('0.15s')
      ]),
      transition('* => void', [
        animate('0.15s')
      ])
    ])
  ]
})
export class FabComponent implements OnInit {
  public expanded = false;

  constructor() { }

  ngOnInit(): void {
  }

  close = () => {
    this.expanded = false;
  };
}
