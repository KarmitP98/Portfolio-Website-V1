import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from '../environments/environment.prod';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AwardsComponent} from './components/awards/awards.component';
import {ContactComponent} from './components/contact/contact.component';
import {AboutMeComponent} from './components/dashboard/about-me/about-me.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeroComponent} from './components/dashboard/hero/hero.component';
import {Project1Component} from './components/dashboard/projects/project1/project1.component';
import {Project2Component} from './components/dashboard/projects/project2/project2.component';
import {ProjectsComponent} from './components/dashboard/projects/projects.component';
import {FabComponent} from './components/fab/fab.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ProjectCardComponent} from './components/project-card/project-card.component';
import {GithubPortfolioComponent} from './components/work/github-portfolio/github-portfolio.component';
import {HeroWorkComponent} from './components/work/hero-work/hero-work.component';
import {WorkComponent} from './components/work/work.component';
import {BubbleComponent} from './components/bubble/bubble.component';
import {IllustrationsComponent} from './components/illustrations/illustrations.component';
import {LineSvgComponent} from './components/line-svg/line-svg.component';
import {JobComponent} from './components/job/job.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    Project1Component,
    Project2Component,
    FooterComponent,
    FabComponent,
    AboutMeComponent,
    DashboardComponent,
    WorkComponent,
    ContactComponent,
    NavbarComponent,
    HeroComponent,
    HeroWorkComponent,
    GithubPortfolioComponent,
    ProjectCardComponent,
    AwardsComponent,
    BubbleComponent,
    IllustrationsComponent,
    LineSvgComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
