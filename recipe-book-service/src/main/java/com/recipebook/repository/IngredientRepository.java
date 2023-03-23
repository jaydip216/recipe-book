package com.recipebook.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.recipebook.entity.Ingredient;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface IngredientRepository extends JpaRepository<Ingredient, Integer>{
	
		List<Ingredient> findByRecipeId(Integer recipeId, Sort sort);
		void deleteByRecipeId(Integer recipeId);

}
