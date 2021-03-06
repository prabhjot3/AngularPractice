import { Component, OnInit,Input } from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private location:Location,
    private heroService:HeroService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getHero();
  }
@Input() hero:Hero;

getHero(){
  const id = +this.route.snapshot.paramMap.get('id');
  this.heroService.getHero(id).subscribe(hero=>this.hero=hero);  
}
goBack(){
  this.location.back();
}

}
