import { Injectable, ViewContainerRef } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';
import { CarrouselComponent } from '../components/carrousel/carrousel.component';
import { BackgroundComponent } from '../components/background/background.component';
import { BlogInfoComponent } from '../components/blog-info/blog-info.component';
import { ContentTextComponent } from '../components/content-text/content-text.component';
import { ContentAlingTextComponent } from '../components/content-aling-text/content-aling-text.component';
import { TeamListComponent } from '../components/team-list/team-list.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  constructor() { }

  generateComponents(viewContainerRef: ViewContainerRef, componentsList:any[]){
    let componentsArray: any[] = [];
    componentsArray = componentsList;
    componentsArray.forEach( data => {
  
      switch (data.__component) {

        case 'components.content-hero':
          const heroRef = viewContainerRef.createComponent(HeroComponent);
          heroRef.instance.heroData = data;
          break;
          
        case 'contents.content-carrousel-info':
          const carrouselRef = viewContainerRef.createComponent(CarrouselComponent);
          carrouselRef.instance.carrouselData = data;
          break;

        case 'components.background-info':
          const backgroundRef = viewContainerRef.createComponent(BackgroundComponent);
          backgroundRef.instance.backgroundData = data;
          break;

        case 'components.blog':
          const blogRef = viewContainerRef.createComponent(BlogInfoComponent);
          blogRef.instance.blogData = data;
          break;

        case 'components.content-text':
          const contentTextRef = viewContainerRef.createComponent(ContentTextComponent);
          contentTextRef.instance.contentTextData = data;
          break;
        
        case 'components.content-aling-text':
          const contentAlingTextRef = viewContainerRef.createComponent(ContentAlingTextComponent);
          contentAlingTextRef.instance.contentAlingTextData = data;
          break;

        case 'contents.content-team-list':
          const teamListRef = viewContainerRef.createComponent(TeamListComponent);
          teamListRef.instance.teamListData = data;
          break;

        default:
          console.log("Null")
          break;
      }
    })

  }

}
