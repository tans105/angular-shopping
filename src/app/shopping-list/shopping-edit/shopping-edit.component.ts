import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
    @ViewChild('f') slForm: NgForm;
    subscription: Subscription;
    editMode: boolean = false;
    editedItemIndex: number;
    editedItem: Ingredient;

    constructor(private shoppingListService: ShoppingListService) {
    }

    ngOnInit() {
        this.subscription = this.shoppingListService.startEditing.subscribe(
            (index: number) => {
                this.editMode = true;
                this.editedItemIndex = index;
                this.editedItem = this.shoppingListService.getIngredientsById(index);
                this.slForm.setValue({
                    name: this.editedItem.name,
                    amount: this.editedItem.amount
                })
            }
        )
    }

    onSubmit(form: NgForm) {
        const newIngredient = new Ingredient(form.value.name, form.value.amount);
        if (this.editMode) {
            this.shoppingListService.updateIngredients(this.editedItemIndex, newIngredient);
        } else {
            this.shoppingListService.addIngredients(newIngredient);
        }
        this.editMode = false;
        form.reset();
    }

    clearItem() {
        this.slForm.reset();
        this.editMode = false;
    }

    onDeleteItem() {
            this.shoppingListService.deleteIngredient(this.editedItemIndex);
            this.clearItem();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
