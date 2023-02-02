import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private recipeService:RecipesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }

  newRecipe(){
      this.router.navigate(['new'], {relativeTo:this.route});
  }

}
