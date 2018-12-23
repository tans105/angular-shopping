import {Injectable, EventEmitter} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Injectable( {
    providedIn: 'root'
} )
export class ShoppingListService
{
    ingredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient( 'Apples', 5 ),
        new Ingredient( 'Tomatoes', 10 )
    ];

    getIngredients()
    {
        return this.ingredients.slice();
    }

    addIngredients( ingredient: Ingredient )
    {
        this.ingredients.push( ingredient );
        this.ingredientChanged.emit( this.ingredients.slice() );
    }

    addIngredientsfromIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit( this.ingredients.slice() );
    }

    addIngredientsForRecipe( ingredients: Ingredient[] )
    {
        this.addIngredientsfromIngredients(ingredients);
    }

}