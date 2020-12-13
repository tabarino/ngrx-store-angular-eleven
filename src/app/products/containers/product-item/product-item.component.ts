import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Pizza } from '../../models/pizza.model';
import { Topping } from '../../models/topping.model';
import * as fromStore from '../../store';

@Component({
    selector: 'product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent implements OnInit {
    pizza$: Observable<Pizza>;
    toppings$: Observable<Topping[]>;
    visualise$: Observable<Pizza>;

    constructor(private store: Store<fromStore.ProductsState>) { }

    ngOnInit(): void {
        // Inputs are done by this.store.select
        this.pizza$ = this.store.select(fromStore.getSelectedPizza).pipe(
            tap((pizza: Pizza = null) => {
                const pizzaExists = !!(pizza && pizza.toppings);
                const toppings = pizzaExists ? pizza.toppings.map(topping => topping.id) : [];
                this.store.dispatch(new fromStore.VisualiseToppings(toppings));
            })
        );
        // Inputs are done by this.store.select
        this.toppings$ = this.store.select(fromStore.getAllToppings);
        this.visualise$ = this.store.select(fromStore.getPizzaVisualised);
    }

    onSelect(event: number[]) {
        // Outputs are done by this.store.dispatch
        this.store.dispatch(new fromStore.VisualiseToppings(event));
    }

    onCreate(event: Pizza) {
        // Outputs are done by this.store.dispatch
        this.store.dispatch(new fromStore.CreatePizza(event));
    }

    onUpdate(event: Pizza) {
        // Outputs are done by this.store.dispatch
        this.store.dispatch(new fromStore.UpdatePizza(event));
    }

    onRemove(event: Pizza) {
        const remove = window.confirm('Are you sure?');
        if (remove) {
            // Outputs are done by this.store.dispatch
            this.store.dispatch(new fromStore.RemovePizza(event));
        }
    }
}
