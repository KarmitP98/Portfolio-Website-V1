import {Component, OnInit} from '@angular/core';
import {PROJECTS} from '../../../models/data';

@Component({
  selector: 'app-github-portfolio',
  templateUrl: './github-portfolio.component.html',
  styleUrls: ['./github-portfolio.component.scss']
})
export class GithubPortfolioComponent implements OnInit {

  projects = PROJECTS;

  constructor() { }

  ngOnInit(): void {
  }

}
