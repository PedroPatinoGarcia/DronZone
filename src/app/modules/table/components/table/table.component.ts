import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dataSource: any = [];
  tableDisplayColumns: string [] = ['Id', 'Latitud', 'Longitud', 'Acciones'];
  
  @Input() set data (data: any) {
    this.dataSource = data;
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
