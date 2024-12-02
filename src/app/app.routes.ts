import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { FavouritesComponent } from './favourites/favourites.component';


export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'favourites',component:FavouritesComponent},
    {path:'add',component:AddComponent},
    {path:'**',component:HomeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
    
];
