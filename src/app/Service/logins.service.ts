import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginsService {

  constructor(private http: HttpClient) { }

  public getLogins(){
    return this.http.get('http://localhost:8080/api/login');
  }
}
