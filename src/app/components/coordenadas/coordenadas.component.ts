import { Component, OnInit } from '@angular/core';


interface Coordenadas {
  id: number;
  latitud: number;
  longitud: number;
}
@Component({
  selector: 'app-coordenadas',
  templateUrl: './coordenadas.component.html',
  styleUrls: ['./coordenadas.component.css']
})
export class CoordenadaComponent implements OnInit {
    coordenadas: Coordenadas[] = [];
  
    ngOnInit() {
      this.getCoordenasFromLocalStorage();
    }
  
    getCoordenasFromLocalStorage() {
      const localStorageData = localStorage.getItem('coordenadas');
      if (localStorageData) {
        this.coordenadas = JSON.parse(localStorageData);
      }
    }
  }
