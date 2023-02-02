import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  index: number;
  editMode: boolean= false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService:RecipesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param: Params)=>{
        this.index=+param['index']
        this.editMode=param['index']!=null;
      }
    )
    this.recipeForm=new FormGroup({
      'name': new FormControl(null),
      'description': new FormControl(null),
      'imagePath': new FormControl(null),
      'ingredients': new FormGroup({
        'name': new FormControl(null),
        'amount': new FormControl(null)
      })
    })
    if(!this.editMode){
      this.recipeForm.reset();
    } else{
      const recipe=this.recipeService.getRecipe(this.index);
      this.recipeForm.patchValue({
        'name':recipe.name,
        'description':recipe.description,
        'imagePath':recipe.imagePath,
      })
    }
  }

  onSubmit(){
      const recipe = new Recipe(
        this.recipeForm.value.name,
        this.recipeForm.value.description,
        this.recipeForm.value.imagePath,
        new Array
      )
      this.recipeService.addRecipe(recipe);
      console.log(recipe);
  }

}
