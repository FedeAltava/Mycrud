import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ItemsServiceService } from '../services/item-service.service';
import { Item } from '../interfaces/item.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [HeaderComponent,CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit{

  constructor(private itemService:ItemsServiceService){}

  items:Item[]=[];

  ngOnInit(): void {
    this.itemService.ItemsCartObservable.subscribe(item=>{
      this.items= item;
    });
  }
  onClickDeleteProductCart(indice:number){
    this.itemService.deleteCartProduct(indice);
  }
}
