import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoordenadaService {

  constructor(private http: HttpClient) { }

  public getCoordenada(){
    return this.http.get('http://localhost:8080/api/dron');
  }
}
