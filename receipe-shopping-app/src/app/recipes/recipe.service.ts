import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{
    
    selectedRecipe = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe('A Test Recipe','This is simply a test',
        'https://d2mkh7ukbp9xav.cloudfront.net/recipeimage/cazyuxhz-61b24-382467-cfcd2-bla80i28/46aa8548-4885-4de2-9832-a58f36eac2e4/main/best-ever-garlic-prawns.jpg'),
        new Recipe('Second Recipe','This is second test',
        'https://d2mkh7ukbp9xav.cloudfront.net/recipeimage/cazyuxhz-61b24-382467-cfcd2-bla80i28/46aa8548-4885-4de2-9832-a58f36eac2e4/main/best-ever-garlic-prawns.jpg')
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}
