import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {
    private arrayItems:Item[]=[];
    private _Items: BehaviorSubject<Item[]>= new BehaviorSubject<Item[]>([]);;
    constructor() {}

     getItemsObservable(){
        return this._Items.asObservable();
     }
    addNewProductObservable(item:Item){
        this.arrayItems.push(item);
        this._Items.next(this.arrayItems);
    }

}