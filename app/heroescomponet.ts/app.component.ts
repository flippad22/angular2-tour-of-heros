import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
     <h1>{{title}}</h1>
     <a routerLink="/heroes">Heroes</a>
     <router-outlet></router-outlet>
   `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
