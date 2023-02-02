import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipesService {
    recipesChanged= new Subject<Recipe[]>();
    constructor(private shoppingListService:ShoppingListService){}
    private recipes: Recipe[] = [
        new Recipe(
            'Biriyani',
            'Hyndrabadi Biriyani',
            'https://upload.wikimedia.org/wikipedia/commons/c/cf/Biryani_of_Lahore.jpg',
            [
                new Ingredient('Rice', 1),
                new Ingredient('Water', 1)
            ]
        ),
        new Recipe(
            'Burger',
            'Veg Burger',
            'https://nishkitchen.com/wp-content/uploads/2012/02/Beef-Burger-Patty-2-Ways-1B.jpg',
            [
                new Ingredient('Tomato', 1),
                new Ingredient('Onion', 1)
            ]
        ),
    ]

    getRecipes() {
        return this.recipes.slice();
    }

    addToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(index:number){
        return this.recipes[index];
    }

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number,recipe:Recipe){
        this.recipes[index]=recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}