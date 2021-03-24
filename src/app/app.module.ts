import {NgModule}                from '@angular/core';
import {FormsModule}             from '@angular/forms';
import {MatIconModule}           from '@angular/material/icon';
import {MatInputModule}          from '@angular/material/input';
import {BrowserModule}           from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule}   from './app-routing.module';
import {AppComponent}       from './app.component';
import {ContactComponent}   from './components/contact/contact.component';
import {AboutMeComponent}   from './components/dashboard/about-me/about-me.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeroComponent}      from './components/dashboard/hero/hero.component';
import {Project1Component}  from './components/dashboard/projects/project1/project1.component';
import {Project2Component}  from './components/dashboard/projects/project2/project2.component';
import {ProjectsComponent}  from './components/dashboard/projects/projects.component';
import {FabComponent}       from './components/fab/fab.component';
import {FooterComponent}    from './components/footer/footer.component';
import {NavbarComponent}    from './components/navbar/navbar.component';
import {WorkComponent}      from './components/work/work.component';
import { HeroWorkComponent } from './components/work/hero-work/hero-work.component';
import { GithubPortfolioComponent } from './components/work/github-portfolio/github-portfolio.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

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
              ProjectCardComponent
            ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              BrowserAnimationsModule,
              FormsModule,
              MatInputModule,
              MatIconModule
            ],
            providers: [],
            bootstrap: [AppComponent]
          })
export class AppModule {}
