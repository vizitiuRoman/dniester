import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromBooking from './booking/booking.reducer';
import * as fromService from './service/service.reducer';

export interface State {
    [fromBooking.bookingsFeatureKey]: fromBooking.State;
    [fromService.servicesFeatureKey]: fromService.State;
}

export const reducers: ActionReducerMap<State> = {
    [fromBooking.bookingsFeatureKey]: fromBooking.reducer,
    [fromService.servicesFeatureKey]: fromService.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
