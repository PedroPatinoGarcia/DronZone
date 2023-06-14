import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tipoDron',
  templateUrl: './tipoDron.component.html',
  styleUrls: ['./tipoDron.component.css']
})
export class TipoDronComponent {
  tipoDron: any[] = [];
  visibleTipoDron: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 1;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getTipoDron();
  }

  getTipoDron() {
  this.http.get<any[]>('http://localhost:8080/api/tipoDron').subscribe(tipoDron => {
    this.tipoDron = tipoDron.map(tipoDron => {
      return tipoDron;
    });
      });
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.visibleTipoDron = this.getVisibleTipoDron();
  }

  getVisibleTipoDron() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.tipoDron.slice(startIndex, endIndex);
  }
}