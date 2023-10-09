import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Página principal',
    loadChildren: ()=> import('./modules/home/home.module').then( routes => routes.HomeModule)
  },
  {
    path: 'sobre-nosotros',
    title: 'Nosotros',
    loadChildren: ()=> import('./modules/about-us/about-us.module').then( routes => routes.AboutUsModule)
  },
  {
    path: 'nuestros-servicios',
    title: 'Servicios',
    loadChildren: ()=> import('./modules/our-services/our-services.module').then( routes => routes.OurServicesModule)
  },
  {
    path: 'blog',
    title: 'Blog',
    loadChildren: ()=> import('./modules/blog/blog.module').then( routes => routes.BlogModule)
  },
  {
    path: 'contacto',
    title: 'Contacto',
    loadChildren: ()=> import('./modules/contact/contact.module').then( routes => routes.ContactModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
