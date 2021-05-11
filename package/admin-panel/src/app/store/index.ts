import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromBooking from './booking/booking.reducer';

export interface State {
    [fromBooking.bookingsFeatureKey]: fromBooking.State;
}

export const reducers: ActionReducerMap<State> = {
    [fromBooking.bookingsFeatureKey]: fromBooking.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
