import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from 'src/app/environments/environment.prod';
import { Response } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private http = inject(HttpClient);

  private token = environment.token;
  private url = environment.url;

  getComponents(){
    return this.http.get<Response>(`${this.url}/api/home?populate[0]=components&populate[1]=components.image&populate[2]=components.carrousel.image&populate[3]=components.relation_details.image`, {
      headers: {
        'authorization': `${this.token}`
      }
    }).pipe(
      map((resp)=> {
        return resp.data.attributes.components
      }),
      catchError((err: HttpErrorResponse)=> {
        return of(err.error || "unknown error");
      })
    )
  }

 
}
