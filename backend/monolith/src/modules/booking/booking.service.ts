import { Injectable } from '@nestjs/common';

import { BookingRepository } from './booking.repository';
import type { BookingDto } from './dto/BookingDto';

@Injectable()
export class BookingService {
    constructor(private readonly bookingRepository: BookingRepository) {}

    async getBookings(): Promise<BookingDto[]> {
        const bookings = await this.bookingRepository.find();
        return bookings.toDtos();
    }

    async getBookingsByCompany(companyId: string): Promise<BookingDto[]> {
        const bookings = await this.bookingRepository.find({
            where: {
                companyId,
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
