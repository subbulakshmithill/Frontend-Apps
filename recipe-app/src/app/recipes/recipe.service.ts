import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Recipe 1', 
        'Beef stew', 
        'https://www.gimmesomeoven.com/wp-content/uploads/2013/03/Guinness-Beef-Stew-Recipe-1.jpg', 
        [
            new Ingredient('Beef', 1),
            new Ingredient('Onions', 6)
        ]),
        new Recipe('Recipe 2', 
        'Veggie stew', 
        'https://www.gimmesomeoven.com/wp-content/uploads/2013/03/Guinness-Beef-Stew-Recipe-1.jpg', 
        [
            new Ingredient('onions', 6),
            new Ingredient('carrot', 5),
            new Ingredient('paprika', 2)
        ])
       ];

       constructor(private shopService: ShoppingService){}
getRecipes(){
    return this.recipes.slice(); //.slice() gives copy of recipes array
}
addIngredientsToShoppingList(ingredients: Ingredient[]){
this.shopService.addIng(ingredients);
}

}
