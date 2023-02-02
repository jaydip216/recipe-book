import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  @ViewChild('ingForm', { static: false }) form: NgForm;
  editMode:boolean=false;
  editIndex:number;
  selectedIngredient: Ingredient;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.ingredientSelected.subscribe(
      (index:number)=>{
        this.editMode=true;
        this.editIndex=index;
        this.selectedIngredient=this.shoppingListService.getIngredient(index);
        this.form.setValue({
          'name': this.selectedIngredient.name,
          'amount': this.selectedIngredient.amount
        })
      }
    )
  }

  onAddItem() {
    const ingName = this.form.value.name;
    const ingAmount = this.form.value.amount;
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editIndex, new Ingredient(ingName,ingAmount));
    }else{
      this.shoppingListService.onIngredientAdded(new Ingredient(ingName,ingAmount));
    }
    this.editMode=false;
    this.form.reset();
  }

  onDelete(){
    this.onClear();
    this.shoppingListService.removeIngredient(this.editIndex);
  }

  onClear(){
    this.editMode=false;
    this.form.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
