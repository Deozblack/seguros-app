import { Component, inject } from '@angular/core';
import { OurServicesService } from 'src/app/core/services/our-services.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {

  private ourserService = inject(OurServicesService);
  public components!:any[];

  ngOnInit(): void {
    this.loadComponents();
  }

  loadComponents(){
    this.ourserService.getComponents().subscribe({
      next: (resp)=> {
        this.components = resp;
      }
    })
  }

}
