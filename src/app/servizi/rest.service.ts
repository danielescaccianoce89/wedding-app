import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  private apiUrl = environment.BASE_API_URL;

  constructor(private httpClient: HttpClient) {}

  getApi(url: string): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + url);
  }

  postApi(url: string, data: any) {
    return this.httpClient.post(this.apiUrl + url, data);
  }
  
}
