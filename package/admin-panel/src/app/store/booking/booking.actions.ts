import { Create } from '@models/base.model';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Booking } from '@models/booking.model';

export const loadBookings = createAction('[Booking/API] Load Bookings');

export const beginAddBooking = createAction(
    '[Booking/API] Begin Add Booking',
    props<{ data: Create<Booking, string> }>()
);

export const beginUpdateBooking = createAction(
    '[Booking/API] Begin Update Booking',
    props<{ data: Booking }>()
);

export const beginDeleteBookings = createAction(
    '[Booking/API] Begin Delete Bookings',
    // tslint:disable-next-line:no-any
    props<{ ids: any[] }>()
);

export const addBooking = createAction(
    '[Booking/API] Add Booking',
    props<{ data: Booking }>()
);

export const upsertBooking = createAction(
    '[Booking/API] Upsert Booking',
    props<{ booking: Booking }>()
);

export const addBookings = createAction(
    '[Booking/API] Add Bookings',
    props<{ data: Booking[] }>()
);

export const upsertBookings = createAction(
    '[Booking/API] Upsert Bookings',
    props<{ bookings: Booking[] }>()
);

export const updateBooking = createAction(
    '[Booking/API] Update Booking',
    props<{ data: Update<Booking> }>()
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
    // tslint:disable-next-line:no-any
    props<{ ids: any[] }>()
);

export const clearBookings = createAction('[Booking/API] Clear Bookings');
