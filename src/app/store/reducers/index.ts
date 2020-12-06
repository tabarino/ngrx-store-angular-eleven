import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
import { ActionReducer, ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromRouter from '@ngrx/router-store';

/**
 * Logger - MetaReducer
 */
// tslint:disable-next-line: no-empty-interface
export interface AppState {
}

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];

/**
 * Router Reducer
 */
export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}

export interface State {
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
    routerReducer: fromRouter.routerReducer
};

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');

export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const { url } = routerState;
        const { queryParams } = routerState.root;

        let state: ActivatedRouteSnapshot = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }

        const { params } = state;

        return { url, queryParams, params };
    }
}
