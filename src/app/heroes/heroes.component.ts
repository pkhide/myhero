import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

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


  constructor() { }
  ngOnInit() {
  }


  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}