import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './heroes.component';

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},
template: `
   <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
   </nav>
   <router-outlet></router-outlet>
 `
