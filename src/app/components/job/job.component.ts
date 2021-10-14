import { Component, Input, OnInit } from '@angular/core';
import { JobModel } from '../../models/model';

@Component( {
              selector: 'app-job',
              templateUrl: './job.component.html',
              styleUrls: [ './job.component.scss' ]
            } )
export class JobComponent implements OnInit {

  @Input() job!: JobModel;

  constructor() { }

  ngOnInit(): void {
  }

  getDateFormatted( date: Date ): string {
    return new Date( date ).toLocaleDateString( 'en-US', { month: 'short', year: 'numeric' } );
  }

  getAllResp(): string[] {
    return this.job.responsibilities.slice().filter( value => value?.length );
  }
}
