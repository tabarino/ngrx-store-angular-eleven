import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPizzas from './pizzas.reducer';

export interface ProductsState {
    pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer
};

/**
 * Products State
 */
export const getProductsState = createFeatureSelector<ProductsState>('products');

/**
 * Pizzas State
 */
export const getPizzasState = createSelector(getProductsState, (state: ProductsState) => state.pizzas);
export const getPizzasEntities = createSelector(getPizzasState, fromPizzas.getPizzasEntities);
export const getAllPizzas = createSelector(getPizzasEntities,
    (entities) => {
        return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
    }
);
export const getPizzasLoading = createSelector(getPizzasState, fromPizzas.getPizzasLoading);
export const getPizzasLoaded = createSelector(getPizzasState, fromPizzas.getPizzasLoading);
