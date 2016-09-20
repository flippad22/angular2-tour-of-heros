import { Component } from '@angular/core';
@Component({

selector: 'my heros',
  template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero = 'Windstorm';
}
export class Hero {
  id: number;
  name: string;
}

@Component({
template:`
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input value="{{hero.name}}" placeholder="name">
  </div>

})


export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero ={
    id: 1,
  name: 'Windstorm'
  };
}



