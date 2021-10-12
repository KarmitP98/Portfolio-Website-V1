import {Component, OnInit} from '@angular/core';
import {JobModel} from '../../../models/model';
import {JOBS} from '../../../constants/jobs';

@Component({
  selector: 'app-hero-work',
  templateUrl: './hero-work.component.html',
  styleUrls: ['./hero-work.component.scss']
})
export class HeroWorkComponent implements OnInit {

  jobs: JobModel[] = JOBS;

  constructor() { }

  ngOnInit(): void {
  }

}
