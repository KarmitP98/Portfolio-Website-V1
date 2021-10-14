import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JobModel } from '../../../models/model';
import { DataService } from '../../../services/data.service';

@Component( {
              selector: 'app-hero-work',
              templateUrl: './hero-work.component.html',
              styleUrls: [ './hero-work.component.scss' ]
            } )
export class HeroWorkComponent implements OnInit, OnDestroy {

  jobs: JobModel[] = [];
  sub!: Subscription;
  loading = true;

  constructor( private ds: DataService ) { }

  async ngOnInit(): Promise<void> {
    this.sub = await this.ds.fetchAllWork().get().subscribe( async value => {
      this.loading = true;
      if ( !value.empty ) {
        this.jobs = value.docs.slice().map( job => ( { ...job.data() } ) ).sort(( ( a, b ) => a.startDate > b.startDate ? -1 : 1 ) );
        for ( let i = 0; i < this.jobs.length; i++ ) {
          const data = await this.jobs[i].company.get();
          this.jobs[i].companyName = data.data()?.name;
        }
      }
      this.loading = false;
    } );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
