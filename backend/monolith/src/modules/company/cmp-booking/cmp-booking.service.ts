import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import type { FindManyOptions } from 'typeorm/find-options/FindManyOptions';

import type { BookingEntity } from '../../general/booking/booking.entity';
import { BookingRepository } from '../../general/booking/booking.repository';
import type { BookingDto } from '../../general/booking/dto/BookingDto';
import type { CreateCmpBookingDto } from './dto/CreateCmpBookingDto';
import type { UpdateCmpBookingDto } from './dto/UpdateCmpBookingDto';

@Injectable()
export class CmpBookingService {
    constructor(private readonly bookingRepository: BookingRepository) {}

    public async createBooking(
        booking: CreateCmpBookingDto,
    ): Promise<BookingDto> {
        try {
            const createdBooking = this.bookingRepository.create(booking);
            return (await this.bookingRepository.save(createdBooking)).toDto();
        } catch (e) {
            Logger.error('[createBooking] error', e, CmpBookingService.name);
        }
    }

    public async updateBooking(
        booking: UpdateCmpBookingDto,
    ): Promise<BookingDto> {
        try {
            return (await this.bookingRepository.save(booking)).toDto();
        } catch (e) {
            Logger.error('[updateBooking] error', e, CmpBookingService.name);
        }
    }

    public async getCompanyBookings(
        companyId: string,
        options?: FindManyOptions<BookingEntity>,
    ): Promise<BookingDto[]> {
        try {
            return (
                await this.bookingRepository.find({
                    ...options,
                    where: {
                        companyId,
                    },
                })
            ).toDtos();
        } catch (e) {
            Logger.error(
                '[getCompanyBookings] error',
                e,
                CmpBookingService.name,
            );
        }
    }

    public async getCompanyBooking(
        id: string,
        companyId: string,
    ): Promise<BookingDto> {
        try {
            return (
                await this.bookingRepository.findOne({
                    where: {
                        id,
                        companyId,
                    },
                })
            ).toDto();
        } catch (e) {
            Logger.error(
                '[getCompanyBooking] error',
                e,
                CmpBookingService.name,
            );
        }
    }

    public async deleteCompanyBooking(
        id: string,
        companyId: string,
    ): Promise<BookingDto> {
        try {
            const booking = await this.bookingRepository.findOne({
                where: {
                    id,
                    companyId,
                },
            });
            if (!booking) {
                throw new NotFoundException(
                    `not found booking: id ${id} companyId ${companyId}`,
                );
            }
            return (await this.bookingRepository.remove(booking)).toDto();
        } catch (e) {
            Logger.error(
                '[deleteCompanyBooking] error',
                e,
                CmpBookingService.name,
            );
        }
    }
}
