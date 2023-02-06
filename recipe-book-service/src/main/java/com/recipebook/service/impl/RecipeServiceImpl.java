package com.recipebook.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.recipebook.collection.Recipe;
import com.recipebook.repository.RecipeRepository;
import com.recipebook.service.RecipeService;

@Service
public class RecipeServiceImpl implements RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;

    @Override
    public List<Recipe> getRecipes() {
        final List<Recipe> recipes = recipeRepository.findAll();
        return recipes;
    }

    @Override
    public void postRecipe(final Recipe recipe) {
        recipeRepository.save(recipe);
        return;
    }

    @Override
    public void postRecipes(List<Recipe> recipes) {
        recipeRepository.deleteAll();
        recipeRepository.saveAll(recipes);
        return;
    }
}
