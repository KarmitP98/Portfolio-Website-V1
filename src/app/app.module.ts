import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { Project1Component } from './components/projects/project1/project1.component';
import { Project2Component } from './components/projects/project2/project2.component';
import { FooterComponent } from './components/footer/footer.component';
import { FabComponent } from './components/fab/fab.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    Project1Component,
    Project2Component,
    FooterComponent,
    FabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
