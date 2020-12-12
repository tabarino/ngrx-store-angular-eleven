import { Pizza } from '../../models/pizza.model';
import * as fromPizzas from '../actions/pizzas.action';

export interface PizzasState {
    entities: { [id: number]: Pizza };
    loading: boolean;
    loaded: boolean;
}

export const initialState: PizzasState = {
    entities: {},
    loading: false,
    loaded: false
};

export function reducer(
    state = initialState,
    action: fromPizzas.PizzasAction
): PizzasState {
    switch (action.type) {
        case fromPizzas.LOAD_PIZZAS: {
            return {
                ...state,
                loading: true
            };
        }
        case fromPizzas.LOAD_PIZZAS_SUCCESS: {
            const pizzas = action.payload;
            const entities = pizzas.reduce((pizzaEntities: { [id: number]: Pizza }, pizza: Pizza) => {
                return {
                    ...pizzaEntities,
                    [pizza.id]: pizza
                };
            }, {
                ...state.entities
            });

            return {
                ...state,
                entities,
                loading: false,
                loaded: true
            };
        }
        case fromPizzas.LOAD_PIZZAS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
        case fromPizzas.CREATE_PIZZA_SUCCESS:
        case fromPizzas.UPDATE_PIZZA_SUCCESS: {
            const pizza = action.payload;
            const entities = {
                ...state.entities,
                [pizza.id]: pizza
            };

            return {
                ...state,
                entities
            };
        }
    }

    return state;
}

export const getPizzasEntities = (state: PizzasState) => state.entities;
export const getPizzasLoading = (state: PizzasState) => state.loading;
export const getPizzasLoaded = (state: PizzasState) => state.loaded;
