import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, catchError } from "rxjs/operators";
import { environment } from 'src/app/environments/environment.prod';
import { SendEmail, SendEmailResponse } from '../interfaces/send-email.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private http = inject(HttpClient);
  private token = environment.token;
  private url = environment.url;
  
  getComponents(){
    return this.http.get<any>(`${this.url}/api/contact?populate[0]=components&populate[1]=components.image`, {
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

  sendEmail(data: SendEmail){
 
    return this.http.post<SendEmailResponse>(`${this.url}/api/contact-forms`, data , {
      headers: {
        'authorization': `${this.token}`
      }
    }).pipe(
      map((resp)=> {
        return resp
      }),
      catchError((err)=> {
        throw new Error(err)
      })
    )
  }

}
