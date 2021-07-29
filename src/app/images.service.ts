import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  apiBaseUrl: string = "http://127.0.0.1:8000/";

  constructor(private http: HttpClient) { }

  fetchImages() {
    return this.http.get(this.apiBaseUrl + 'images-list/');
  }
}
