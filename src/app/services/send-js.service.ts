import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RegInfo } from '../components/registration-form.component'

@Injectable({
  providedIn: 'root'
})
export class SendJSService {

  constructor(private http: HttpClient) { }

  sendRegistration(regInfo: RegInfo): Observable<any> {
    console.log(regInfo);
    return this.http.post(`${environment.server_url}/register`, regInfo);
  }
}
