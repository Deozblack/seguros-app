import { Component, inject } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private homeService = inject(HomeService);
  public components!:any[];

  ngOnInit(): void {
    this.loadComponents();
  }

  loadComponents(){
    this.homeService.getComponents().subscribe({
      next: (resp:any)=> {
        this.components = resp;
      }
    })
  }




}
