package com.recipebook.service;

import java.util.List;
import java.util.Set;

import com.recipebook.DTO.IngredientDTO;
import com.recipebook.entity.Ingredient;
import com.recipebook.entity.Recipe;

public interface IngredientService {

	public void save(final List<IngredientDTO> ingredients, final Integer recipeId);
	
	public void delete(final Integer recipeId);
	
	public List<IngredientDTO> getIngredients(final Integer recipeId);

}
