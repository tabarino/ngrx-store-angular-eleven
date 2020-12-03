import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pizza } from '../../models/pizza.model';
import * as fromStore from '../../store';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    pizzas$: Observable<Pizza[]>;

    constructor(private store: Store<fromStore.ProductsState>) { }

    ngOnInit(): void {
        this.pizzas$ = this.store.select(fromStore.getAllPizzas);
    }
}
