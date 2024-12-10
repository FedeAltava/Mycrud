import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkActive,RouterLink,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchValue:string = '';
  @Output() searchValueChange = new EventEmitter<string>();
  onSearchChange(){
    this.searchValueChange.emit(this.searchValue);
  }
}
