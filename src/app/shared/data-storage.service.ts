import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import 'rxjs/add/operator/map';
import {AuthService} from "../auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(private http: Http, private recipeService: RecipeService, private authservice: AuthService) {
    }

    storeRecipe() {
        const token = this.authservice.getToken();
        return this.http.put('https://ng-recipe-book-984e0.firebaseio.com/recipes.json?' + token, this.recipeService.getRecipe());
    }

    getRecipes() {
        const token = this.authservice.getToken();
        this.http.get('https://ng-recipe-book-984e0.firebaseio.com/recipes.json?auth=' + token)
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
