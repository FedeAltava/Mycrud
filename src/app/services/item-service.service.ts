import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {
    private arrayItems:Item[]=[];
    private _Items: BehaviorSubject<Item[]>;
    constructor() {
        this._Items = new BehaviorSubject<Item[]>([]);
     }
     getItems(){
        return this._Items.asObservable();
     }
    addNewProduct(item:Item){
        this.arrayItems.push(item);
        this._Items.next(this.arrayItems);
    }

}