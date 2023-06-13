import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:3001';

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(this.url + '/api/recipes');
  }
  getById(id: string) {
    return this.http.get(this.url + '/api/recipe/' + id);
  }

  addPost(credentials: any) {
    console.log(credentials)
    return this.http.post(this.url + '/api/recipes', credentials);
  }

}
