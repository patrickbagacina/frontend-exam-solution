import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewTemplateService {

  constructor(private http: HttpClient) { }

  getViewTemplate(path: string) {
    return this.http.get(`../assets/JSON/config/${path}.json`);
  }
}
