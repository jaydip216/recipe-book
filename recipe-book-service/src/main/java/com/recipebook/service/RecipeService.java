package com.recipebook.service;

import java.util.List;

import com.recipebook.DTO.RecipeDTO;
import com.recipebook.entity.Recipe;

public interface RecipeService {
    
    public List<RecipeDTO> getRecipes();
    public void postRecipe(final RecipeDTO recipeDTO);
    public RecipeDTO getRecipe(final Integer recipeId);
    public void updateRecipe(final RecipeDTO recipeDTO);
    public void deleteRecipe(final Integer recipeId);
}
