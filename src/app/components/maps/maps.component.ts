import { AfterViewInit, Component } from '@angular/core';
import { LeafletMouseEvent, Map, icon, marker, tileLayer } from 'leaflet';
import { HttpClient } from '@angular/common/http';


interface Coordenada {
  latitud: any,
  longitud: any
}

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements AfterViewInit {
  coordenadas: Coordenada[] = [];
  markers: any[] = [];


  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    const map = new Map('map').setView([43.3708, -8.3959], 13);
    tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    }).addTo(map);
  
    this.http.get<Coordenada[]>('http://localhost:8080/api/dron').subscribe((data) => {
      this.coordenadas = data;
      for (const coordenada of this.coordenadas) {
        let iconL = icon({iconUrl:'/assets/imagenes/dron.png', iconSize: [52,52]});
        let iconOptions = {
          icon: iconL,
        }
        const { latitud = 0, longitud = 0 } = coordenada;
        const m = marker([latitud, longitud], iconOptions).addTo(map);
        this.markers.push(m);
      }
    });
    
    //esta funcion crear un marker cuando se clica sobre el mapa
    map.on('click', (event: LeafletMouseEvent) => {
      const latitudlongitud = event.latlng;
      const nuevaCoordenada: Coordenada = { latitud: latitudlongitud.lat, longitud: latitudlongitud.lng };
      this.http.post('http://localhost:8080/api/dron', nuevaCoordenada).subscribe(() => {
        this.coordenadas.push(nuevaCoordenada);
        const m = marker([latitudlongitud.lat, latitudlongitud.lng]).addTo(map);
        this.markers.push(m);
      });
    });
  }
}