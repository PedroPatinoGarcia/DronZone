import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-drone',
  templateUrl: './drone.component.html',
  styleUrls: ['./drone.component.css']
})
export class DroneComponent {
  drone: any[] = [];
  visibleDrone: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 1;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getDrone();
  }

  getDrone() {
  this.http.get<any[]>('http://localhost:9000/api/listDron').subscribe(drone => {
    this.drone = drone.map(drone => {
      return drone;
    });
    this.totalPages = Math.ceil(this.drone.length / this.itemsPerPage);
    this.visibleDrone = this.getVisibleDrones();
      });
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.visibleDrone = this.getVisibleDrones();
  }

  getVisibleDrones() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.drone.slice(startIndex, endIndex);
  }
}