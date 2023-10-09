import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/app/environments/environment.prod';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  private http = inject(HttpClient);

  private token = environment.token;
  private url = environment.url;

  getComponents(){
    return this.http.get<any>(`${this.url}/api/about-us?populate[0]=components&populate[1]=components.image&populate[2]=components.carrousel.image&populate[3]=components.relation_details.image&populate[4]=components.worker.image`, {
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

}
