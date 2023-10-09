import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/app/environments/environment.prod';
import { Response } from '../interfaces/response.interface';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private http = inject(HttpClient);

  private token = environment.token;
  private url = environment.url;

  getComponents(){
    return this.http.get<any>(`${this.url}/api/blog?populate[0]=components&populate[1]=components.image&populate[2]=components.carrousel.image&populate[3]=components.relation_details.image`, {
      headers: {
        'authorization': `${this.token}`
      }
    }).pipe(
      map((resp)=> {
        return resp.data.attributes.components
      }),
      catchError((err)=> {
        throw new Error(err)
      })
    )
  }

  getBlogById(id:string){
    return this.http.get<any>(`${this.url}/api/blog-details/${id}?populate=*`, {
      headers: {
        'authorization': `${this.token}`
      }
    }).pipe(
      map((resp)=> {
        return resp.data.attributes
      }),
      catchError((err)=> {
        throw new Error(err)
      })
    )
  }

}
