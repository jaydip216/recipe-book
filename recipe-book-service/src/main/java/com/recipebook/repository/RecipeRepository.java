package com.recipebook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.recipebook.entity.Recipe;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface RecipeRepository extends JpaRepository<Recipe, Integer>{

}
