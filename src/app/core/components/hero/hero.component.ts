import { Component } from '@angular/core';
import { ComponentData } from '../../interfaces/response.interface';
import { Hero } from '../../interfaces/hero.interfaces';
import { environment } from 'src/app/environments/environment.prod';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  public heroData!:any;
  public hero!:Hero;
  private url = environment.url;
  
  ngOnInit(): void {
    this.setHero();
  }

  setHero(){
    this.hero = {
      id: this.heroData.id,
      title: this.heroData.title,
      description: this.heroData.description,
      image: this.heroData.image?.data.attributes.url
    }
  }

  get Url(){
    return `${this.url}`
  }
}
