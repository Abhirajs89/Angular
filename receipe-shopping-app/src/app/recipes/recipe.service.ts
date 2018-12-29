import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    
    selectedRecipe = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe('A Test Recipe',
        'This is simply a test',
        'https://d2mkh7ukbp9xav.cloudfront.net/recipeimage/cazyuxhz-61b24-382467-cfcd2-bla80i28/46aa8548-4885-4de2-9832-a58f36eac2e4/main/best-ever-garlic-prawns.jpg',
        [new Ingredient('Shrimps',20),
         new Ingredient('White Wine', 1)]),
        new Recipe('Second Recipe',
        'This is second test',
        'https://d2mkh7ukbp9xav.cloudfront.net/recipeimage/cazyuxhz-61b24-382467-cfcd2-bla80i28/46aa8548-4885-4de2-9832-a58f36eac2e4/main/best-ever-garlic-prawns.jpg',
        [new Ingredient('Meat',200),
         new Ingredient('Bun', 5)])
      ];

        constructor(private slService: ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
          this.slService.addIngredints(ingredients);
      }
}
