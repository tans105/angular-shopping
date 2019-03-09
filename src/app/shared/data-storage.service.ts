import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(private http: Http, private recipeService: RecipeService) {
    }

    storeRecipe() {
        return this.http.put('https://ng-recipe-book-984e0.firebaseio.com/recipes.json', this.recipeService.getRecipe());
    }

    getRecipes() {
        this.http.get('https://ng-recipe-book-984e0.firebaseio.com/recipes.json')
            .map(
                (response: Response) => {
                    const recipes = response.json(); //convert response to javascript object in our case this will be array of recipes
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            )
    }
}
