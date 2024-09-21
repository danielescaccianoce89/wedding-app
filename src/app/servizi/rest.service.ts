import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  

  constructor(private httpClient: HttpClient) {}

 /*  getData(url: string): Observable<any> {
    //https://fake-json-api.mock.beeceptor.com/users
    return this.httpClient.get<any>(url);
  } */

  getApi(url: string): Observable<any> {
    return this.httpClient.get<any>(url);
  }

  putApi(url: string, data: any) {
    return this.httpClient.put(url, data);
  }

 /*  getGuestById(url: string, id: number): Observable<any> {
    return this.httpClient.get<any>(url + "/" + id);
  } */
  
}
