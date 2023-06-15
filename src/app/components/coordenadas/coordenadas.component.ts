import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coordenadas',
  templateUrl: './coordenadas.component.html',
  styleUrls: ['./coordenadas.component.css'],
})
export class CoordenadasComponent implements OnInit {
  coordenadas:any;

  public displayedColumns: string[] = ['id', 'latitud', 'longitud', 'modelo'];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCoordenadas();
  }

  getCoordenadas() {
    this.http
      .get<any[]>('http://localhost:8081/api/dron')
      .subscribe((coordenadas) => {
        this.coordenadas = coordenadas.map((coordenadas) => {
          return coordenadas;
        });
      });
  }
}
