import { ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

// tslint:disable-next-line: no-empty-interface
export interface AppState {
}

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];
