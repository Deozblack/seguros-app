import { Component } from '@angular/core';
import { Blog } from '../../interfaces/blog.interface';
import { environment } from 'src/app/environments/environment.prod';

@Component({
  selector: 'app-blog-info',
  templateUrl: './blog-info.component.html',
  styleUrls: ['./blog-info.component.scss']
})
export class BlogInfoComponent {

  public blogData!:any;
  public blog!:Blog;
  public url = environment.url;
  public urlLink:string = '/blog/articulo/';

  ngOnInit(): void {
    this.setBlog();
  }

  setBlog(){
    this.blog = {
      id: this.blogData.id,
      title: this.blogData.title,
      description: this.blogData.description!,
      relation_details: this.blogData.relation_details!
    }
  }

  get Url(){
    return this.url;
  }

}
