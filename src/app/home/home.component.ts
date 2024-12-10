import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { ItemsServiceService } from '../services/item-service.service';
import { Item } from '../interfaces/item.interface';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,CommonModule,SearchPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  items:Item[]=[];
  searchValue = '';
  constructor(private itemService:ItemsServiceService){}


  ngOnInit(){
    this.itemService.ItemsObservable.subscribe(Item =>{
      this.items = Item;
 
    })
  }
  onSearchValueChange(value:string){
    console.log('Valor de búsqueda recibido:', value);
    this.searchValue=value;
  }
  onClickDelete(indice:number){
    this.itemService.deleteProduct(indice);
  }
  onClickAdd(item:Item){
    this.itemService.addCartItemObservable(item);
  }
}
