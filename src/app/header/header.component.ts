import { Component } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService) {
  }

  saveRecipes() {
    this.recipeService.storeRecipe();
  }

  loadRecipes() {
    this.recipeService.loadRecipes();
  }
}
