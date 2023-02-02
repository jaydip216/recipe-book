import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService:RecipesService,
              private route: ActivatedRoute,
              private router:Router) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.recipe=this.recipeService.getRecipe(+params['index']);
      }
    );
  }

  addToShoppingList(){
    this.recipeService.addToShoppingList(this.recipe.ingredients);
    this.router.navigate(['shopping-list']);
  }

  editRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }

}
