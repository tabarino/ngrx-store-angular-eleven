import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pizza } from '../../models/pizza.model';
import * as fromStore from '../../store';

/**
 * We can use ChangeDetectionStrategy.OnPush in all the components/containers when we use NGRX.Store
 */

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
    pizzas$: Observable<Pizza[]>;

    constructor(private store: Store<fromStore.ProductsState>) { }

    ngOnInit(): void {
        this.pizzas$ = this.store.select(fromStore.getAllPizzas);
    }
}
