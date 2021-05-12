import { Service } from '@models/service.model';
import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ServiceActions from './service.actions';

export const servicesFeatureKey = 'services';

export interface State extends EntityState<Service> {
    selectedServiceId: string | null;
}

export const adapter: EntityAdapter<Service> = createEntityAdapter<Service>();

export const initialState: State = adapter.getInitialState({
    selectedServiceId: null,
});

export const reducer = createReducer(
    initialState,
    on(ServiceActions.addService, (state, action) =>
        adapter.addOne(action.data, state)
    ),
    on(ServiceActions.upsertService, (state, action) =>
        adapter.upsertOne(action.booking, state)
    ),
    on(ServiceActions.addServices, (state, action) =>
        adapter.addMany(action.data, state)
    ),
    on(ServiceActions.upsertServices, (state, action) =>
        adapter.upsertMany(action.bookings, state)
    ),
    on(ServiceActions.updateService, (state, action) =>
        adapter.updateOne(action.data, state)
    ),
    on(ServiceActions.updateServices, (state, action) =>
        adapter.updateMany(action.bookings, state)
    ),
    on(ServiceActions.deleteService, (state, action) =>
        adapter.removeOne(action.id, state)
    ),
    on(ServiceActions.deleteServices, (state, action) =>
        adapter.removeMany(action.ids, state)
    ),
    on(ServiceActions.clearServices, (state) => adapter.removeAll(state))
);

export const getSelectedServiceId = (state: State) => state.selectedServiceId;

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();

export const selectServiceIds = selectIds;

// select the dictionary of user entities
export const selectServiceEntities = selectEntities;

// select the array of users
export const selectAllServices = selectAll;

// select the total user count
export const selectServiceTotal = selectTotal;
