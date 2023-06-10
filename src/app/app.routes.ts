import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CoordenadasComponent } from "./components/coordenadas/coordenadas.component";
import { DroneComponent } from "./components/drone/drone.component";
import { MapsComponent } from "./components/maps/maps.component";
import { UserComponent } from "./components/user/user.component";

const app_routes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'coordenadas', component: CoordenadasComponent },
    {path: 'drone', component: DroneComponent },
    {path: 'maps', component: MapsComponent },
    {path: 'user', component: UserComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'user' },    
];

export const app_routing = RouterModule.forRoot(app_routes);