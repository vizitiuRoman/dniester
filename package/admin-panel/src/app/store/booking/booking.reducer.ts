import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Booking } from '@models/booking.model';

import * as BookingActions from './booking.actions';

export const bookingsFeatureKey = 'bookings';

export interface State extends EntityState<Booking> {
    selectedBookingId: string | null;
}

export const adapter: EntityAdapter<Booking> = createEntityAdapter<Booking>();

export const initialState: State = adapter.getInitialState({
    selectedBookingId: null,
});

export const reducer = createReducer(
    initialState,
    on(BookingActions.addBooking, (state, action) =>
        adapter.addOne(action.data, state)
    ),
    on(BookingActions.upsertBooking, (state, action) =>
        adapter.upsertOne(action.booking, state)
    ),
    on(BookingActions.addBookings, (state, action) =>
        adapter.addMany(action.data, state)
    ),
    on(BookingActions.upsertBookings, (state, action) =>
        adapter.upsertMany(action.bookings, state)
    ),
    on(BookingActions.updateBooking, (state, action) =>
        adapter.updateOne(action.data, state)
    ),
    on(BookingActions.updateBookings, (state, action) =>
        adapter.updateMany(action.bookings, state)
    ),
    on(BookingActions.deleteBooking, (state, action) =>
        adapter.removeOne(action.id, state)
    ),
    on(BookingActions.deleteBookings, (state, action) =>
        adapter.removeMany(action.ids, state)
    ),
    on(BookingActions.clearBookings, (state) => adapter.removeAll(state))
);

export const getSelectedBookingId = (state: State) => state.selectedBookingId;

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();

export const selectBookingIds = selectIds;

// select the dictionary of user entities
export const selectBookingEntities = selectEntities;

// select the array of users
export const selectAllBookings = selectAll;

// select the total user count
export const selectBookingTotal = selectTotal;
