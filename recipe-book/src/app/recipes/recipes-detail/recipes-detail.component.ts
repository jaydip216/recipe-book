import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  recipe: Recipe;
  recipeId: number;

  constructor(private recipeService: RecipesService,
    private route: ActivatedRoute,
    private router: Router) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeId = +params['recipeId']
        this.recipeService.getByRecipeId(this.recipeId);
        this.subscription = this.recipeService.recipeChanged.subscribe(
          (recipe) => {
            this.recipe = recipe;
          }
        )
      }
    );
  }

  editRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(['/recipe'])
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
