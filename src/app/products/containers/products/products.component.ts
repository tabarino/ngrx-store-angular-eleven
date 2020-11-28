import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../models/pizza.model';
import { PizzasService } from '../../services';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    pizzas: Pizza[];

    constructor(private pizzaService: PizzasService) { }

    ngOnInit(): void {
        this.pizzaService.getPizzas().subscribe(pizzas => {
            this.pizzas = pizzas;
        });
    }
}
