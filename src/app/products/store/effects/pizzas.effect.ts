import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as pizzaActions from '../actions/pizzas.action';
import * as fromServices from '../../services';

@Injectable()
export class PizzasEffects {
    @Effect()
    loadPizzas$ = this.actions$.pipe(
        ofType(pizzaActions.LOAD_PIZZAS),
        switchMap(() => {
            return this.pizzasService.getPizzas().pipe(
                map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
                catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
            );
        })
    );

    constructor(
        private actions$: Actions,
        private pizzasService: fromServices.PizzasService
    ) { }
}
