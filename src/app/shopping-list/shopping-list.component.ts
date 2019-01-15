import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[] = [];
    ingredientsChangedSubscription: Subscription;

    constructor(private shoppingListService: ShoppingListService) {
    }

    ngOnInit() {
        this.ingredients = this.shoppingListService.getIngredients();
        this.ingredientsChangedSubscription = this.shoppingListService.ingredientChanged.subscribe(
            (ingredients: Ingredient[]) => this.ingredients = ingredients
        );
    }

    ngOnDestroy() {
        this.ingredientsChangedSubscription.unsubscribe(); //since we are using our own subject so to prevent memory leak we have to unsubscrbe on ngDestroy lifecycle
    }
}
