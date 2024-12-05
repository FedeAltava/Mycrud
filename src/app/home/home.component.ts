import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { ItemsServiceService } from '../services/item-service.service';
import { Item } from '../interfaces/item.interface';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  items:Item[]=[];
  constructor(private itemService:ItemsServiceService){}


  ngOnInit(){
    this.itemService.ItemsObservable.subscribe(Item =>{
      this.items = Item;
    })
  }
  onClickDelete(indice:number){
    this.itemService.deleteProduct(indice);
  }
}
