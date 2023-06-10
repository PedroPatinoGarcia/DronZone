import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coordenadas',
  templateUrl: './coordenadas.component.html',
  styleUrls: ['./coordenadas.component.css']
})
export class CoordenadasComponent implements OnInit{
  dataSource: any = [];
  tableDisplayColumns: string [] = ['id', 'latitud', 'longitud', 'acciones'];
  
  @Input() set data (data: any) {
    this.dataSource = data;
  }
  constructor () {}
  
  ngOnInit(): void {}
}

