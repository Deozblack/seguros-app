import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public items!: MenuItem[];

  ngOnInit() {
    this.items = [
        {
            label: 'Sobre nosotros',
            routerLink: 'sobre-nosotros',
            routerLinkActiveOptions: { exact: true },
            style:{

            }
        },
        {
            label: 'Nuestros servicios',
            routerLink: 'nuestros-servicios',
            routerLinkActiveOptions: { exact: true }
        },
        {
          label: 'Blog',
          routerLink: 'blog',
          routerLinkActiveOptions: { exact: true }
        }
    ];
  }
}
