import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public desc: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, descp: string, imgPath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.desc = descp;
        this.imagePath = imgPath;
        this.ingredients = ingredients;
    }
}