import { Component } from '@angular/core';
import { CarrouselInfo } from '../../interfaces/carrousel.interface';
import { environment } from 'src/app/environments/environment.prod';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent {
  public carrouselData!: any;
  public carrousel!: CarrouselInfo;
  private url = environment.url;
  public responsiveOptions: any[] | undefined;

  ngOnInit(): void {
    this.setCarrousel();
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1,
      }
    ];
  }

  setCarrousel(){
    this.carrousel = {
      id: this.carrouselData.id,
      title: this.carrouselData.title,
      description: this.carrouselData.description,
      carrousel: this.carrouselData.carrousel!,
      button_text: this.carrouselData.button_text,
      button_url: this.carrouselData.button_url
    }
  }

  get Url(){
    return `${this.url}`
  }
}
