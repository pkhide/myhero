import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // // object #1
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstrom'
  // };

  // // object #2
  // hero1: Hero={
  //   id:2,
  //   name:'test obj 2'
  // };


  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelected(hero: Hero): void {
    this.selectedHero = hero;
    console.log('This is ' + hero.name);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

}