import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainDataService {

  constructor(private http: HttpClient) { }

  getTextData() {
    return this.http.get('assets/plain-text.txt', {responseType: 'text'});
  }
}
