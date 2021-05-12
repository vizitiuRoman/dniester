import { createFeatureSelector, createSelector } from '@ngrx/store';

import { bookingsFeatureKey } from './booking.reducer';
import * as fromBooking from './booking.reducer';

export const selectBookingState = createFeatureSelector<fromBooking.State>(
    bookingsFeatureKey
);

export const selectBookingIds = createSelector(
    selectBookingState,
    fromBooking.selectBookingIds
);
export const selectBookingEntities = createSelector(
    selectBookingState,
    fromBooking.selectBookingEntities
);
export const selectAllBookings = createSelector(
    selectBookingState,
    fromBooking.selectAllBookings
);
export const selectBookingTotal = createSelector(
    selectBookingState,
    fromBooking.selectBookingTotal
);
export const selectCurrentBookingId = createSelector(
    selectBookingState,
    fromBooking.getSelectedBookingId
);

export const selectCurrentBooking = createSelector(
    selectBookingEntities,
    selectCurrentBookingId,
    (entities, id) => (id ? entities[id] : {})
);
