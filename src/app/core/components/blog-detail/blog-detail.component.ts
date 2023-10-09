import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, map, tap } from 'rxjs';
import { BlogService } from '../../services/blog.service';
import { DatumAttributes } from '../../interfaces/blog.interface';
import { environment } from 'src/app/environments/environment.prod';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent {

  public router = inject(ActivatedRoute);
  public blogService = inject(BlogService);
  public blog!:DatumAttributes;
  private url = environment.url;

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      const id = params['id']
      this.blogService.getBlogById(id).subscribe((resp)=> {
          this.blog = resp;
      });
    })
  }

  get Url(){
    return this.url;
  }

}
