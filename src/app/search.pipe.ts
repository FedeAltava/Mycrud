import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './interfaces/item.interface';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: Item[], searchInput: string){
    console.log('Pipe ejecutada con:', value, 'y búsqueda:', searchInput);
    searchInput = searchInput ? searchInput.toLowerCase():'';
    return searchInput ? value.filter(Item=>Item.name.toLocaleLowerCase().includes(searchInput)):value;
  }

}
