import { Topping } from '../../models/topping.model';
import * as fromToppings from '../actions/toppings.action';

export interface ToppingsState {
    entities: { [id: number]: Topping };
    loading: boolean;
    loaded: boolean;
    selectedToppings: number[];
}

export const initialState: ToppingsState = {
    entities: {},
    loading: false,
    loaded: false,
    selectedToppings: [],
};

export function reducer(
    state = initialState,
    action: fromToppings.ToppingsAction
): ToppingsState {
    switch (action.type) {
        case fromToppings.LOAD_TOPPINGS: {
            return {
                ...state,
                loading: true
            };
        }
        case fromToppings.LOAD_TOPPINGS_SUCCESS: {
            const toppings = action.payload;
            const entities = toppings.reduce((toppingEntities: { [id: number]: Topping }, topping: Topping) => {
                return {
                    ...toppingEntities,
                    [topping.id]: topping
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
        case fromToppings.LOAD_TOPPINGS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
        case fromToppings.VISUALISE_TOPPINGS: {
            const selectedToppings = action.payload;

            return {
                ...state,
                selectedToppings
            };
        }
    }

    return state;
}

export const getToppingsEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getSelectedToppings = (state: ToppingsState) => state.selectedToppings;
