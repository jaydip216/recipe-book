import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipesService {
    recipesChanged = new Subject<Recipe[]>();
    recipeChanged = new Subject<Recipe>();
    private recipes: Recipe[] = [];
    private recipe: Recipe;

    constructor(
        private http: HttpClient) { }

    getRecipes() {
        this.fetch();
        return this.recipes.slice();
    }

    getRecipe() {
        return this.recipe;
    }

    addRecipe(recipe: Recipe) {
        this.save(recipe);
    }

    updateRecipe(recipeId: number, recipe: Recipe) {
        this.update(recipeId, recipe)
    }

    deleteRecipe(recipeId: number) {
        this.delete(recipeId);
    }

    fetch() {
        console.log('Get Recipes');
        this.http.get<Recipe[]>("http://localhost:8080/v1/recipe-book/recipe")
            .subscribe(
                (response) => {
                    this.setRecipes(response);
                }
            )

    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getByRecipeId(recipeId: number) {
        this.http.get<Recipe>("http://localhost:8080/v1/recipe-book/recipe" + "/" + recipeId.toString())
            .subscribe(
                (response) => {
                    this.setRecipe(response);
                }
            )
    }

    setRecipe(recipe: Recipe) {
        this.recipe = recipe;
        this.recipeChanged.next(this.recipe);
    }

    save(recipe: Recipe) {
        console.log('save recipe');
        this.http.post("http://localhost:8080/v1/recipe-book/recipe", recipe)
            .subscribe(
                (response) => {
                    this.fetch();
                }
            )
    }

    update(recipeId: number, recipe: Recipe) {
        recipe.recipeId = recipeId;
        console.log("update recipe");
        this.http.put("http://localhost:8080/v1/recipe-book/recipe", recipe)
            .subscribe(
                (response) => {
                    this.fetch();
                }
            )
    }

    delete(recipeId: number) {
        this.http.delete("http://localhost:8080/v1/recipe-book/recipe" + "/" + recipeId.toString())
            .subscribe(
                (response) => {
                    this.fetch();
                }
            )
    }

}