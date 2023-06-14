import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tiposDronService } from './Service/tiposDron.service';
import { CoordenadaService } from './Service/coordenada.service';
import { LoginsService } from './Service/logins.service';

@Component({  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent implements OnInit{
  public logins$!:Observable<any>;
  public tiposDron$!:Observable<any>;
  public coordenada$!:Observable<any>;
  constructor(private loginsServices: LoginsService, private tiposDronService: tiposDronService, private coordenadaService: CoordenadaService) {}

  ngOnInit(){
    this.logins$ = this.loginsServices.getLogins();
    this.tiposDron$ = this.tiposDronService.getTiposDron();
    this.coordenada$ = this.coordenadaService.getCoordenada();
  }  
}
