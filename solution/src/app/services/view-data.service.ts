import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewDataService {

  constructor(private http: HttpClient) { }

  getViewData(path: string) {
    return this.http.get(`../assets/JSON/data/${path}.json`);
  }
}
