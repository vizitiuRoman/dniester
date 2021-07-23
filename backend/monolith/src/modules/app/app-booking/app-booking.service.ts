import { Injectable } from '@nestjs/common';

import { BookingRepository } from '../../general/booking/booking.repository';
import type { BookingDto } from '../../general/booking/dto/BookingDto';

@Injectable()
export class AppBookingService {
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
