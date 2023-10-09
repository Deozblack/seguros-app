import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { inject } from '@angular/core';
import { environment } from 'src/app/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OurServicesService {

  private http = inject(HttpClient);

  private token = environment.token;
  private url = environment.url;

  getComponents(){
    return this.http.get<any>(`${this.url}/api/our-service?populate[0]=components&populate[1]=components.image&populate[2]=components.carrousel.image&populate[3]=components.relation_details.image`, {
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
