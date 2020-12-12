import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as pizzasActions from '../actions/pizzas.action';
import * as fromServices from '../../services';
import * as fromRoot from '../../../store';

@Injectable()
export class PizzasEffects {
    constructor(
        private actions$: Actions,
        private pizzasService: fromServices.PizzasService
    ) { }

    @Effect()
    loadPizzas$ = this.actions$.pipe(
        ofType(pizzasActions.LOAD_PIZZAS),
        switchMap(() => {
            return this.pizzasService.getPizzas().pipe(
                map(pizzas => new pizzasActions.LoadPizzasSuccess(pizzas)),
                catchError(error => of(new pizzasActions.LoadPizzasFail(error)))
            );
        })
    );

    @Effect()
    createPizza$ = this.actions$.pipe(
        ofType(pizzasActions.CREATE_PIZZA),
        map((action: pizzasActions.CreatePizza) => action.payload),
        switchMap(pizza => {
            return this.pizzasService.createPizza(pizza).pipe(
                map(pizzaCreated => new pizzasActions.CreatePizzaSuccess(pizzaCreated)),
                catchError(error => of(new pizzasActions.CreatePizzaFail(error)))
            );
        })
    );

    @Effect()
    createPizzaSuccess$ = this.actions$.pipe(
        ofType(pizzasActions.CREATE_PIZZA_SUCCESS),
        map((action: pizzasActions.CreatePizzaSuccess) => action.payload),
        map(pizza => new fromRoot.Go({
            path: ['/products', pizza.id]
        }))
    );

    @Effect()
    updatePizza$ = this.actions$.pipe(
        ofType(pizzasActions.UPDATE_PIZZA),
        map((action: pizzasActions.UpdatePizza) => action.payload),
        switchMap(pizza => {
            return this.pizzasService.updatePizza(pizza).pipe(
                map(pizzaUpdated => new pizzasActions.UpdatePizzaSuccess(pizzaUpdated)),
                catchError(error => of(new pizzasActions.UpdatePizzaFail(error)))
            );
        })
    );

    @Effect()
    removePizza$ = this.actions$.pipe(
        ofType(pizzasActions.REMOVE_PIZZA),
        map((action: pizzasActions.RemovePizza) => action.payload),
        switchMap(pizza => {
            return this.pizzasService.removePizza(pizza).pipe(
                map(() => new pizzasActions.RemovePizzaSuccess(pizza)),
                catchError(error => of(new pizzasActions.RemovePizzaFail(error)))
            );
        })
    );

    @Effect()
    handlePizzaSuccess$ = this.actions$.pipe(
        ofType(pizzasActions.UPDATE_PIZZA_SUCCESS, pizzasActions.REMOVE_PIZZA_SUCCESS),
        map(pizza => new fromRoot.Go({
            path: ['/products']
        }))
    );
}
