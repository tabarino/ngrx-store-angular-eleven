import { createSelector } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';
import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';

export const getPizzasState = createSelector(
    fromFeature.getProductsState, (state: fromFeature.ProductsState) => state.pizzas
);

export const getPizzasEntities = createSelector(getPizzasState, fromPizzas.getPizzasEntities);
export const getAllPizzas = createSelector(getPizzasEntities,
    (entities) => {
        return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
    }
);

export const getSelectedPizza = createSelector(getPizzasEntities, fromRoot.getRouterState,
    (entities, router): Pizza => {
        return router.state && entities[router.state.params.pizzaId];
    }
);

export const getPizzasLoading = createSelector(getPizzasState, fromPizzas.getPizzasLoading);
export const getPizzasLoaded = createSelector(getPizzasState, fromPizzas.getPizzasLoading);
