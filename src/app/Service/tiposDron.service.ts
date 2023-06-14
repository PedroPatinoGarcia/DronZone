import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class tiposDronService {

  constructor(private http: HttpClient) { }

  public getTiposDron(){
    return this.http.get('http://localhost:8080/api/tipoDron');
  }
}
