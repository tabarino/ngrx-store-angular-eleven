import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
    visualise: Pizza;

    constructor(private store: Store<fromStore.ProductsState>) { }

    ngOnInit(): void {
        this.store.dispatch(new fromStore.LoadToppings());
        this.pizza$ = this.store.select(fromStore.getSelectedPizza);
        this.toppings$ = this.store.select(fromStore.getAllToppings);
    }

    onSelect(event: number[]) {
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
