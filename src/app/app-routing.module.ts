import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'work', component: WorkComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule( {
             imports: [ RouterModule.forRoot( routes ) ],
             exports: [ RouterModule ]
           } )
export class AppRoutingModule {}
