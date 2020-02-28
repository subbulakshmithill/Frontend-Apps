import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingService {
    ingredientsadded = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Carrot', 6),
        new Ingredient('Tomatoes', 10)
      ];
getIngredient(){
    return this.ingredients.slice();
}

addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsadded.emit(this.ingredients.slice());
}
addIng(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsadded.emit(this.ingredients.slice());
}
}
