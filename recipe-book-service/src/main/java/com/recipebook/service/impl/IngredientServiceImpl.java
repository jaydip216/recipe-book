package com.recipebook.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.recipebook.DTO.IngredientDTO;
import com.recipebook.entity.Ingredient;
import com.recipebook.entity.Recipe;
import com.recipebook.mapper.IngredientMapper;
import com.recipebook.repository.IngredientRepository;
import com.recipebook.service.IngredientService;

@Service
public class IngredientServiceImpl implements IngredientService {

	@Autowired
	private IngredientRepository ingredientRepository;

	@Autowired
	private IngredientMapper mapper;

	@Override
	public void save(final List<IngredientDTO> ingredients, final Integer recipeId) {
		ingredientRepository.deleteByRecipeId(recipeId);
		for(IngredientDTO ingredientDTO : ingredients) {
			Ingredient entity = mapper.toEntity(ingredientDTO);
			entity.setRecipeId(recipeId);
			ingredientRepository.save(entity);
		}
	}

	@Override
	public void delete(final Integer recipeId) {
		ingredientRepository.deleteByRecipeId(recipeId);
	}

	@Override
	public List<IngredientDTO> getIngredients(final Integer recipeId) {
		List<Ingredient> ingredients = ingredientRepository.findByRecipeId(recipeId, Sort.unsorted());
		List<IngredientDTO> response = new ArrayList<>();
		for (Ingredient ingredient : ingredients) {
			IngredientDTO dto = mapper.toResponse(ingredient);
			response.add(dto);
		}
		return response;
	}

}
