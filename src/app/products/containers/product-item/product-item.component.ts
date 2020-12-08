import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Pizza } from '../../models/pizza.model';
import { Topping } from '../../models/topping.model';
import * as fromStore from '../../store';

@Component({
    selector: 'product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
    pizza$: Observable<Pizza>;
    toppings$: Observable<Topping[]>;
    visualise$: Observable<Pizza>;

    constructor(private store: Store<fromStore.ProductsState>) { }

    ngOnInit(): void {
        this.pizza$ = this.store.select(fromStore.getSelectedPizza).pipe(
            tap((pizza: Pizza = null) => {
                const pizzaExists = !!(pizza && pizza.toppings);
                const toppings = pizzaExists ? pizza.toppings.map(topping => topping.id) : [];
                this.store.dispatch(new fromStore.VisualiseToppings(toppings));
            })
        );
        this.toppings$ = this.store.select(fromStore.getAllToppings);
        this.visualise$ = this.store.select(fromStore.getPizzaVisualised);
    }

    onSelect(event: number[]) {
        this.store.dispatch(new fromStore.VisualiseToppings(event));
    }

    onCreate(event: Pizza) {
    }

    onUpdate(event: Pizza) {
    }

    onRemove(event: Pizza) {
        const remove = window.confirm('Are you sure?');
        if (remove) {
        }
    }
}
