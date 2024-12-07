import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';



export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'cart',component:ShoppingCartComponent},
    {path:'add',component:AddComponent},
    {path:'**',component:HomeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
    
];
