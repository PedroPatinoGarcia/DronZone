import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from "angular-datatables";
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MapsComponent } from './components/maps/maps.component';
import { app_routing } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TipoDronComponent } from './components/tipoDron/tipoDron.component';
import { LoginComponent } from './components/login/login.component';
import { TableModule } from './modules/table/table.module';
import { CoordenadasComponent } from './components/coordenadas/coordenadas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapsComponent,
    TipoDronComponent,
    LoginComponent,
    CoordenadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    app_routing,
    DataTablesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    DataTablesModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
