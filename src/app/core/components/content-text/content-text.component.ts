import { Component } from '@angular/core';
import { ContentText } from '../../interfaces/content-text.interface';

@Component({
  selector: 'app-content-text',
  templateUrl: './content-text.component.html',
  styleUrls: ['./content-text.component.scss']
})
export class ContentTextComponent {
  public contentTextData!: any;
  public contentText!: ContentText;
  public url!:string;

  ngOnInit(): void {
    this.setContentText();
  }

  setContentText(){
    this.contentText = {
      id: this.contentTextData.id,
      title: this.contentTextData.title,
      description: this.contentTextData.description,
      button_text: this.contentTextData.button_text!,
      button_url: this.contentTextData.button_url!,
    }
    this.url = `/${this.contentTextData.button_url}`
  }
}
