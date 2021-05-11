import { Booking } from '@models/booking.model';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export const loadBookings = createAction('[Booking/API] Load Bookings');

export const addBooking = createAction(
    '[Booking/API] Add Booking',
    props<{ booking: Booking }>()
);

export const upsertBooking = createAction(
    '[Booking/API] Upsert Booking',
    props<{ booking: Booking }>()
);

export const addBookings = createAction(
    '[Booking/API] Add Bookings',
    props<{ bookings: Booking[] }>()
);

export const upsertBookings = createAction(
    '[Booking/API] Upsert Bookings',
    props<{ bookings: Booking[] }>()
);

export const updateBooking = createAction(
    '[Booking/API] Update Booking',
    props<{ booking: Update<Booking> }>()
);

export const updateBookings = createAction(
    '[Booking/API] Update Bookings',
    props<{ bookings: Update<Booking>[] }>()
);

export const deleteBooking = createAction(
    '[Booking/API] Delete Booking',
    props<{ id: string }>()
);

export const deleteBookings = createAction(
    '[Booking/API] Delete Bookings',
    props<{ ids: string[] }>()
);

export const clearBookings = createAction('[Booking/API] Clear Bookings');
