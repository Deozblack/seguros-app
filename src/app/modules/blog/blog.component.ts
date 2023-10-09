import { Component, inject } from '@angular/core';
import { ComponentData } from 'src/app/core/interfaces/response.interface';
import { BlogService } from 'src/app/core/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  private blogService = inject(BlogService);
  public components!:any[];

  ngOnInit(): void {
    this.loadComponents();
  }

  loadComponents(){
    this.blogService.getComponents().subscribe({
      next: (resp)=> {
        this.components = resp;
      }
    })
  }

}
