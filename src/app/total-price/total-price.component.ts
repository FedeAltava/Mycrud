import { Component, OnInit } from '@angular/core';
import { ItemsServiceService } from '../services/item-service.service';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-total-price',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './total-price.component.html',
  styleUrl: './total-price.component.css'
})
export class TotalPriceComponent implements OnInit{
  total:number = 0;
  constructor(private itemService:ItemsServiceService){}
  
  ngOnInit() {
    this.itemService.ItemsCartObservable
    .pipe(map(items =>{
      return items.reduce((prev,curr)=>prev + curr.price,0)
    }))
    .subscribe(val=>{
      this.total = val;
    })
  }

}
