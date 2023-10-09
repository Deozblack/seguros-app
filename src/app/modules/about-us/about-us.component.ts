import { Component, inject } from '@angular/core';
import { AboutUsService } from 'src/app/core/services/about-us.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  private aboutUsService = inject(AboutUsService);
  public components!:any[];

  ngOnInit(): void {
    this.loadComponents();
  }

  loadComponents(){
    this.aboutUsService.getComponents().subscribe({
      next: (resp)=> {
        this.components = resp;
      }
    })
  }


}
