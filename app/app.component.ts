import {Component} from 'angular2/core';
import {Hero} from "./hero";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";
import {OnInit} from "angular2/core";

@Component({
  selector: "my-app",
  template: `
  <h1>{{title}}</h1>
  <h2>My heroes</h2>
  <ul class="heroes">
    <li *ngFor="#hero of heroes"
    [class.selected]="hero === selectedHero"
    (click)="onSelect(hero)">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <div *ngIf="selectedHero">
    <h2>{{selectedHero.name}} details!</h2>
    <div><label>id: </label>{{selectedHero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedHero.name" placeholder="name">
    </div>
  </div>
  `,
  styles:[`
    .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
    .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
    .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
    .heroes .badge {
      font-size: small;
      color: white;
      padding: 0.1em 0.7em;
      background-color: #369;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -1px;
    }
    .selected { background-color: #EEE; color: #369; }
    `],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class AppComponent implements OnInit{
  public title = "Tour of heroes";
  public heroes: Hero[];
  public selectedHero: Hero;
  constructor(private _heroService: HeroService){}
  getHeroes(){
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(){
    this.getHeroes();
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }
}
