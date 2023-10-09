import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { HeroComponent } from './components/hero/hero.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { BackgroundComponent } from './components/background/background.component';
import { BlogInfoComponent } from './components/blog-info/blog-info.component';
import { ContentTextComponent } from './components/content-text/content-text.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { ContentAlingTextComponent } from './components/content-aling-text/content-aling-text.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HeroComponent,
    CarrouselComponent,
    BackgroundComponent,
    BlogInfoComponent,
    ContentTextComponent,
    BlogDetailComponent,
    ContentAlingTextComponent,
    TeamListComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    SharedModule
  ],
  exports: [
    HeroComponent
  ]
})
export class CoreModule { }
