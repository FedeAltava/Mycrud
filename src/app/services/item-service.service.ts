import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {
    private arrayItems:Item[]=[];
    private _Items: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
    private arrayCart :Item[]=[];
    private _ItemCart:BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
    constructor() {}
    //Shopping cart array
    addCartItemObservable(item:Item){
      this.arrayCart.push(item);
      this._ItemCart.next(this.arrayCart);
      console.log(item);
    }

    deleteCartProduct(index:number){
      this.arrayCart.splice(index,1);
      this._ItemCart.next(this.arrayCart);
    }
    get ItemsCartObservable(){
      return this._ItemCart.asObservable();
    }
    //home page array 

    addNewProductObservable(item:Item){
        this.arrayItems.push(item);
        this._Items.next(this.arrayItems);
        console.log(item);
    }
    deleteProduct(index:number){
      this.arrayItems.splice(index,1);
      this._Items.next(this.arrayItems);
    }
    get ItemsObservable(){
      return this._Items.asObservable();
   }
}