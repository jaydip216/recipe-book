import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  constructor(private recipeService:RecipesService){}

  ngOnInit(): void {
    
  }

  onSave(){
    this.recipeService.save();
  }

  onFetch(){
    this.recipeService.fetch();
  }
}
