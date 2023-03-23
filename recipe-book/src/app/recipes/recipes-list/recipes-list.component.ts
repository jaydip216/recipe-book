import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  recipes: Recipe[] = [];

  constructor(private recipeService:RecipesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes:Recipe[])=>{
        this.recipes=recipes;
      }
    )
  }

  newRecipe(){
      this.router.navigate(['new'], {relativeTo:this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
