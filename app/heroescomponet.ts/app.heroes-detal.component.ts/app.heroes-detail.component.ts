<button (click)="save()">Save</button>save(): void {
  this.heroService.update(this.hero)
    .then(this.goBack);
}
<button (click)="save()">Save</button>
save(): void {
  this.heroService.update(this.hero)
    .then(this.goBack);
}