package com.recipebook.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.recipebook.collection.Ingredient;

@Repository
public interface IngredientRepository extends MongoRepository<Ingredient, Integer>{

}
