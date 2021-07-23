import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookingRepository } from '../../general/booking/booking.repository';
import { CmpBookingController } from './cmp-booking.controller';
import { CmpBookingService } from './cmp-booking.service';

@Module({
    imports: [TypeOrmModule.forFeature([BookingRepository])],
    controllers: [CmpBookingController],
    exports: [CmpBookingService],
    providers: [CmpBookingService],
})
export class CmpBookingModule {}
