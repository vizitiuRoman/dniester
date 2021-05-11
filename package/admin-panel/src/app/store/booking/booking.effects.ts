import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, mergeMap } from 'rxjs/operators';

import { BookingService } from '@services/booking.service';
import { addBookings, loadBookings } from '@store/booking/booking.actions';

@Injectable()
export class BookingEffects {
    constructor(
        private actions$: Actions,
        private bookingService: BookingService
    ) {}

    bookings$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadBookings),
            mergeMap(() =>
                this.bookingService.findAll().pipe(
                    map((bookings) => addBookings({ bookings }))
                    // catchError() // TODO - add global error handler
                )
            )
        )
    );
}
