import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule }   from './app-routing.module';
import { AppComponent }       from './app.component';
import {AboutMeComponent}     from './components/dashboard/about-me/about-me.component';
import { ProjectsComponent }  from './components/dashboard/projects/projects.component';
import { Project1Component }  from './components/dashboard/projects/project1/project1.component';
import { Project2Component }  from './components/dashboard/projects/project2/project2.component';
import { FooterComponent }    from './components/footer/footer.component';
import { FabComponent }       from './components/fab/fab.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorkComponent }      from './components/work/work.component';
import { ContactComponent }   from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/dashboard/hero/hero.component';

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
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
