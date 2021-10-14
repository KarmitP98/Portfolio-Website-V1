import { Component, Input, OnInit } from '@angular/core';
import { ProjectModel } from '../../models/model';

@Component( {
              selector: 'app-project-card',
              templateUrl: './project-card.component.html',
              styleUrls: [ './project-card.component.scss' ]
            } )
export class ProjectCardComponent implements OnInit {

  @Input() data: ProjectModel | undefined;
  activated = false;

  constructor() { }

  ngOnInit(): void {
  }

  deactivateIn(): void {
    this.activated = !this.activated;
    if ( !this.activated ) {
      setTimeout( () => this.activated = false, 3000 );
    }
  }

}
