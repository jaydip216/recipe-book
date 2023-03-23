package com.recipebook.mapper;

import org.springframework.stereotype.Component;

import com.recipebook.DTO.IngredientDTO;
import com.recipebook.entity.Ingredient;

@Component
public class IngredientMapper {

	public IngredientDTO toResponse(final Ingredient ingredient) {
		IngredientDTO ingredientDTO = new IngredientDTO();
		ingredientDTO.setAmount(ingredient.getAmount());
		ingredientDTO.setName(ingredient.getName());
		return ingredientDTO;
	}

	public Ingredient toEntity(final IngredientDTO ingredientDTO) {
		Ingredient ingredient = new Ingredient();
		ingredient.setAmount(ingredientDTO.getAmount());
		ingredient.setName(ingredientDTO.getName());
		return ingredient;
	}
}
