import {Component, Input, OnInit} from '@angular/core';

@Component({
             selector: 'app-project2',
             templateUrl: './project2.component.html',
             styleUrls: ['./project2.component.scss']
           })
export class Project2Component implements OnInit {

  @Input() scenes: boolean[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
