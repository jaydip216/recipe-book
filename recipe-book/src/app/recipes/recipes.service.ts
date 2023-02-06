import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipesService {
    recipesChanged = new Subject<Recipe[]>();
    constructor(private shoppingListService: ShoppingListService,
        private http: HttpClient) { }
    private recipes: Recipe[] = [];

    getRecipes() {
        return this.recipes.slice();
    }

    addToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    save() {
        console.log('Save Recipe');
        this.http.post("http://localhost:8080/v1/recipe-book/recipes", this.recipes)
            .subscribe(
                (response) => {
                    console.log(response);
                }
            )
    }

    fetch() {
        if (this.recipes.length === 0) {
            console.log('Get Recipes');
            this.http.get<Recipe[]>("http://localhost:8080/v1/recipe-book/recipes")
                .subscribe(
                    (response) => {
                        this.setRecipe(response);
                    }
                )
        }
    }

    setRecipe(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
}