import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookingRepository } from './booking.repository';

@Module({
    imports: [TypeOrmModule.forFeature([BookingRepository])],
})
export class BookingModule {}
