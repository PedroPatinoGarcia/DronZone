import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  public getMap(){
    return this.http.get('http://localhost:8080/api/dron');
  }
}
