import { Component } from '@angular/core';
import { ItemsServiceService } from '../services/item-service.service';
import { Item } from '../interfaces/item.interface';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  constructor(private itemService:ItemsServiceService){}
  private arrayItems:Item[]=[];
  
}
