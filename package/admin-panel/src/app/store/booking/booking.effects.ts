import { Injectable } from '@angular/core';
import { Booking } from '@models/booking.model';

import { Actions } from '@ngrx/effects';
import { CrudEffect } from '@store/core/crud.effect';

import { BookingService } from '@services/booking.service';
import {
    addBooking,
    addBookings,
    beginAddBooking,
    beginDeleteBookings,
    beginUpdateBooking,
    deleteBookings,
    loadBookings,
    updateBooking,
} from '@store/booking/booking.actions';

@Injectable()
export class BookingEffects extends CrudEffect<Booking, string> {
    constructor(actions$: Actions, bookingService: BookingService) {
        super(
            actions$,
            bookingService,
            loadBookings,
            addBookings,
            addBooking,
            updateBooking,
            deleteBookings,
            beginAddBooking,
            beginUpdateBooking,
            beginDeleteBookings
        );
    }
}
