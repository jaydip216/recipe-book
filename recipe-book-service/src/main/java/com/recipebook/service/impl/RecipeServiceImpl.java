package com.recipebook.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.recipebook.DTO.IngredientDTO;
import com.recipebook.DTO.RecipeDTO;
import com.recipebook.entity.Recipe;
import com.recipebook.mapper.RecipeMapper;
import com.recipebook.repository.RecipeRepository;
import com.recipebook.service.IngredientService;
import com.recipebook.service.RecipeService;

@Service
public class RecipeServiceImpl implements RecipeService {

	@Autowired
	private RecipeRepository recipeRepository;

	@Autowired
	private IngredientService ingredientService;

	@Autowired
	private RecipeMapper mapper;

	@Override
	public List<RecipeDTO> getRecipes() {
		final List<Recipe> recipes = recipeRepository.findAll();
		final List<RecipeDTO> response = new ArrayList<>();
		for(Recipe recipe: recipes) {
			final List<IngredientDTO> ingredients = ingredientService.getIngredients(recipe.getRecipeId());
			RecipeDTO recipeDTO = mapper.toResponse(recipe);
			recipeDTO.setIngredients(ingredients);
			response.add(recipeDTO);
		}
		return response;
	}

	@Override
	public void postRecipe(final RecipeDTO recipeDTO) {
		Recipe entity = mapper.toEntity(recipeDTO);
		Recipe recipe = recipeRepository.save(entity);
		ingredientService.save(recipeDTO.getIngredients(), recipe.getRecipeId());
		return;
	}

	@Override
	public RecipeDTO getRecipe(final Integer recipeId) {
		Optional<Recipe> recipe = recipeRepository.findById(recipeId);
		if(recipe.isEmpty()) {
			return new RecipeDTO();
		}
		final List<IngredientDTO> ingredients = ingredientService.getIngredients(recipeId);
		RecipeDTO response = mapper.toResponse(recipe.get());
		response.setIngredients(ingredients);
		return response;
	}

	@Override
	public void updateRecipe(final RecipeDTO recipeDTO) {
		Recipe entity = mapper.toEntity(recipeDTO);
		entity.setRecipeId(recipeDTO.getRecipeId());
		recipeRepository.save(entity);
		ingredientService.save(recipeDTO.getIngredients(), recipeDTO.getRecipeId());
		return;
	}

	@Override
	public void deleteRecipe(final Integer recipeId) {
		recipeRepository.deleteById(recipeId);
		ingredientService.delete(recipeId);
	}
}
