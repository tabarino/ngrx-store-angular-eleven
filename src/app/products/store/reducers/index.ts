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
export const getAllPizzas = createSelector(getPizzasState, fromPizzas.getPizzas);
export const getPizzasLoading = createSelector(getPizzasState, fromPizzas.getPizzasLoading);
export const getPizzasLoaded = createSelector(getPizzasState, fromPizzas.getPizzasLoading);
