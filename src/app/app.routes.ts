import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorldNewsComponent } from './world-news/world-news.component';
import { TechnologyComponent } from './technology/technology.component';
import { SportsComponent } from './sports/sports.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'world', component: WorldNewsComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'sports', component: SportsComponent },
  { path: '**', redirectTo: '' }
];
