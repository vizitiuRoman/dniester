import { Injectable } from '@nestjs/common';

import { BookingRepository } from './booking.repository';
import type { BookingDto } from './dto/BookingDto';

@Injectable()
export class BookingService {
    constructor(public readonly bookingRepository: BookingRepository) {}

    async getBookings(): Promise<BookingDto[]> {
        const bookings = await this.bookingRepository.find();
        return bookings.toDtos();
    }

    async getBookingsByUser(userId: string): Promise<BookingDto[]> {
        const bookings = await this.bookingRepository.find({
            where: {
                userId,
            },
        });
        return bookings.toDtos();
    }

    async getBookingsByService(serviceId: string): Promise<BookingDto[]> {
        const bookings = await this.bookingRepository.find({
            where: {
                serviceId,
            },
        });
        return bookings.toDtos();
    }
}
