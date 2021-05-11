import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CrudService } from '@services/crud.service';

import { Booking } from '@models/booking.model';
import { BOOKINGS_API } from '@constants/apis';
import { environment } from '@environments/environment';

@Injectable({
    providedIn: 'root',
})
export class BookingService extends CrudService<Booking, number> {
    constructor(protected httpClient: HttpClient) {
        super(httpClient, `${environment.API_URL}/${BOOKINGS_API.default}`);
    }
}
