package com.recipebook.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.recipebook.collection.Recipe;

@Repository
public interface RecipeRepository extends MongoRepository<Recipe, Integer>{

}
