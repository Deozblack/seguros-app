import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from 'src/app/core/components/blog-detail/blog-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent
  },
  {
    path: 'articulo/:id',
    component: BlogDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
