import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookingController } from './booking.controller';
import { BookingRepository } from './booking.repository';
import { BookingService } from './booking.service';

@Module({
    imports: [TypeOrmModule.forFeature([BookingRepository])],
    controllers: [BookingController],
    exports: [BookingService],
    providers: [BookingService],
})
export class BookingModule {}
