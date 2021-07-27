import { Injectable, Logger } from '@nestjs/common';

import { BookingRepository } from '../../general/booking/booking.repository';
import type { BookingDto } from '../../general/booking/dto/BookingDto';
import type { CreateBookingDto } from './dto/CreateBookingDto';

@Injectable()
export class AppBookingService {
    constructor(private readonly bookingRepository: BookingRepository) {}

    public async createBooking(
        createBookingDto: CreateBookingDto,
    ): Promise<BookingDto> {
        try {
            const booking = this.bookingRepository.create(createBookingDto);
            return (await this.bookingRepository.save(booking)).toDto();
        } catch (e) {
            Logger.error('[createBooking] error', e, AppBookingService.name);
        }
    }

    public async getBookingsByCompany(
        companyId: string,
    ): Promise<BookingDto[]> {
        try {
            return (
                await this.bookingRepository.find({
                    where: {
                        companyId,
                    },
                })
            ).toDtos();
        } catch (e) {
            Logger.error(
                '[getBookingsByCompany] error',
                e,
                AppBookingService.name,
            );
        }
    }

    public async getBookingsByService(
        serviceId: string,
    ): Promise<BookingDto[]> {
        try {
            return (
                await this.bookingRepository.find({
                    where: {
                        serviceId,
                    },
                })
            ).toDtos();
        } catch (e) {
            Logger.error(
                '[getBookingsByService] error',
                e,
                AppBookingService.name,
            );
        }
    }
}
