import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { loadBookings } from '@store/booking/booking.actions';
import { State } from '@store/index';

@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.component.html',
    styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {
    constructor(private store: Store<State>) {}

    ngOnInit(): void {
        this.store.dispatch(loadBookings());
    }
}
