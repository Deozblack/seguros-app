import { Component } from '@angular/core';
import { ContentAlingText } from '../../interfaces/content-aling.interface';
import { environment } from 'src/app/environments/environment.prod';

@Component({
  selector: 'app-content-aling-text',
  templateUrl: './content-aling-text.component.html',
  styleUrls: ['./content-aling-text.component.scss']
})
export class ContentAlingTextComponent {
  public contentAlingTextData!: any;
  public contentAlingText!: ContentAlingText;
  private url = environment.url;

  ngOnInit(): void {
   this.setContentAlingText();
  }

  setContentAlingText(){
    this.contentAlingText = {
      id: this.contentAlingTextData.id,
      title: this.contentAlingTextData.title,
      description: this.contentAlingTextData.description,
      aling_image: this.contentAlingTextData.aling_image,
      image: this.contentAlingTextData.image,
    }
  }

  get Url(){
    return this.url;
  }
}
