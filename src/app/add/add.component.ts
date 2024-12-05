import { Component } from '@angular/core';
import { ItemsServiceService } from '../services/item-service.service';
import { Item } from '../interfaces/item.interface';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { COLORS, MATERIALS, SIZES, TYPES } from '../constants/item-options';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,HeaderComponent],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  itemForm!: FormGroup;
  types = TYPES;
  sizes = SIZES;
  colors = COLORS;
  materials = MATERIALS;

  constructor(
    private itemService: ItemsServiceService,
    private formBuilder: FormBuilder,
    private router:Router
  ) {
    this.itemForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      size: ['',Validators.required],
      color:['',Validators.required],
      material:['',Validators.required],
      description: ['', Validators.required]
    });
  }



  addItem() {
    if(this.itemForm.valid){
      const newItem:Item ={
        id: Date.now(),
        name:this.itemForm.value.name,
        type:this.itemForm.value.type,
        size:this.itemForm.value.size,
        color:this.itemForm.value.color,
        material:this.itemForm.value.material,
        description:this.itemForm.value.description
      };
      this.itemService.addNewProductObservable(newItem);
    }
    this.router.navigate(['/home']);
  }

}
