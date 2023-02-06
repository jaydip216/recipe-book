package com.recipebook.rest;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.recipebook.collection.Recipe;
import com.recipebook.service.RecipeService;

@CrossOrigin
@RestController
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @GetMapping("/recipes")
    public List<Recipe> getRecipes() {
        return recipeService.getRecipes();
    }

    @PostMapping("/recipes")
    public void postRecipes(@RequestBody final List<Recipe> recipes) {
        recipeService.postRecipes(recipes);
    }

    @PostMapping("/recipe")
    public void postRecipe(@RequestBody final Recipe recipe) {
        recipeService.postRecipe(recipe);
    }
}
