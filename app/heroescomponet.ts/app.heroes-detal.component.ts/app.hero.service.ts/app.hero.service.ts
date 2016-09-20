getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}
create(name: string): Promise<Hero> {
  return this.http
    .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
}
<button class="delete"
  (click)="delete(hero); $event.stopPropagation()">x</button>delete(id: number): Promise<void> {
  let url = `${this.heroesUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}
