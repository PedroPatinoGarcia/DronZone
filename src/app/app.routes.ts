import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CoordenadaComponent } from "./components/coordenadas/coordenadas.component";
import { TipoDronComponent } from "./components/tipoDron/tipoDron.component";
import { MapsComponent } from "./components/maps/maps.component";
import { LoginComponent } from "./components/login/login.component";

const app_routes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'coordenadas', component: CoordenadaComponent },
    {path: 'tipoDron', component: TipoDronComponent },
    {path: 'maps', component: MapsComponent },
    {path: 'login', component: LoginComponent },
    { path:'login/new', component: LoginComponent },
    { path:'login/delete/:id', component: LoginComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'login' },    
];

export const app_routing = RouterModule.forRoot(app_routes);