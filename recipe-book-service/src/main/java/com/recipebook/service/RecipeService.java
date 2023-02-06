package com.recipebook.service;

import java.util.List;
import com.recipebook.collection.Recipe;

public interface RecipeService {
    
    public List<Recipe> getRecipes();
    public void postRecipe(final Recipe recipe);
    public void postRecipes(final List<Recipe> recipes);
}
