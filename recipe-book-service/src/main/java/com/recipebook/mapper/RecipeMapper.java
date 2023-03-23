package com.recipebook.mapper;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Component;

import com.recipebook.DTO.IngredientDTO;
import com.recipebook.DTO.RecipeDTO;
import com.recipebook.entity.Ingredient;
import com.recipebook.entity.Recipe;

@Component
public class RecipeMapper {

	public RecipeDTO toResponse(final Recipe recipe) {
		RecipeDTO response = new RecipeDTO();
		response.setDescription(recipe.getDescription());
		response.setImagePath(recipe.getImagePath());
		response.setName(recipe.getName());
		response.setRecipeId(recipe.getRecipeId());
		return response;
	}
	
	public Recipe toEntity(final RecipeDTO recipe) {
		Recipe entity = new Recipe();
		entity.setDescription(recipe.getDescription());
		entity.setImagePath(recipe.getImagePath());
		entity.setName(recipe.getName());
		entity.setRecipeId(recipe.getRecipeId());
		return entity;
	}

}
