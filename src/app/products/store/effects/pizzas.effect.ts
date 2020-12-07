import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as pizzasActions from '../actions/pizzas.action';
import * as fromServices from '../../services';

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
}
