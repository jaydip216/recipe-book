import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingForm', { static: false }) form: NgForm;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    console.log(this.form)
    const ingName = this.form.value.name;
    const ingAmount = this.form.value.amount;
    this.shoppingListService.onIngredientAdded(new Ingredient(ingName,ingAmount));
  }

  onSelect(){

  }

  onClear(){
    this.form.reset();
  }
}
