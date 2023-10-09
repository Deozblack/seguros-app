import { Component } from '@angular/core';
import { BackgroundInfo } from '../../interfaces/background.interface';
import { environment } from 'src/app/environments/environment.prod';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {
  public backgroundData!:any;
  public background!:BackgroundInfo;
  private url = environment.url;

  ngOnInit(): void {
    this.setBackground();
  }
  
  setBackground(){
    this.background = {
      id: this.backgroundData.id,
      title: this.backgroundData.title,
      description: this.backgroundData.description!,
      aling_image: this.backgroundData.aling_image!,
      image: this.backgroundData.image!
    }
  }

  get Url(){
    return `${this.url}`
  }
}
