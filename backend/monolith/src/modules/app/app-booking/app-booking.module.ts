import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookingRepository } from '../../general/booking/booking.repository';
import { AppBookingController } from './app-booking.controller';
import { AppBookingService } from './app-booking.service';

@Module({
    imports: [TypeOrmModule.forFeature([BookingRepository])],
    controllers: [AppBookingController],
    exports: [AppBookingService],
    providers: [AppBookingService],
})
export class AppBookingModule {}
