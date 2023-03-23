package com.recipebook.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.recipebook.DTO.RecipeDTO;
import com.recipebook.entity.Recipe;
import com.recipebook.service.RecipeService;

import jakarta.websocket.server.PathParam;

@CrossOrigin
@RestController
public class RecipeController {

	@Autowired
	private RecipeService recipeService;

	@GetMapping("recipe")
	public List<RecipeDTO> getRecipes() {
		return recipeService.getRecipes();
	}

	@GetMapping("recipe/{id}")
	public RecipeDTO getRecipe(@PathVariable(value ="id") final Integer recipeId) {
		return recipeService.getRecipe(recipeId);
	}

	@PostMapping("recipe")
	public void postRecipe(@RequestBody final RecipeDTO recipe) {
		recipeService.postRecipe(recipe);
	}

	@PutMapping("recipe")
	public void updateRecipe(@RequestBody final RecipeDTO recipe) {
		recipeService.updateRecipe(recipe);
	}

	@DeleteMapping("recipe/{id}")
	public void deleteRecipe(@PathVariable("id") final Integer recipeId) {
		recipeService.deleteRecipe(recipeId);
	}
}
