import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  getHeroes(): void {
    this.heroService.getHeros()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  ngOnInit() {
    this.getHeroes();
  }

}
