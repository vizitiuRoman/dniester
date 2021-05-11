import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';

import { BookingEffects } from '@store/booking/booking.effects';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';

@NgModule({
    declarations: [BookingsComponent],
    imports: [
        CommonModule,
        BookingsRoutingModule,
        EffectsModule.forFeature([BookingEffects]),
    ],
})
export class BookingsModule {}
