import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface TipoDron {
  id: number;
  fabricacion: string;
  modelo: string;
  potencia: number;
  precio: number;
}

@Component({
  selector: 'app-tipoDron',
  templateUrl: './tipoDron.component.html',
  styleUrls: ['./tipoDron.component.css']
})
export class TipoDronComponent implements OnInit {
  TipoDron: TipoDron[] = [];
  
  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.getTipoDronFromAPI();
  }
  
  getTipoDronFromAPI() {
    this.http.get<TipoDron[]>('/api/tipodron').subscribe(
      (data) => {
        this.TipoDron = data;
      },
      (error) => {
        console.error('Error al obtener los datos del API:', error);
      }
    );
  }
}
