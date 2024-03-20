import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  // baseurl = ''

  post(url: string, user: any) {
    return this.http.post( url, user);
  }

  put(url: string, user: any) {
    return this.http.put(url, user);
  }

  get(url: string) {
    return this.http.get(url);
  }

  delete(url: string) {
    return this.http.delete(url);
  }

}
