import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthCompany } from '../../decorators/auth-company.decorator';
import { Auth } from '../../decorators/http.decorators';
import { CompanyEntity } from '../company/company.entity';
import { BookingService } from './booking.service';
import { BookingDto } from './dto/BookingDto';

@Controller('bookings')
@ApiTags('bookings')
export class BookingController {
    constructor(private bookingService: BookingService) {}

    @Get()
    @Auth()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get bookings list',
        type: BookingDto,
    })
    getBookings(@AuthCompany() company: CompanyEntity): Promise<BookingDto[]> {
        return this.bookingService.getBookingsByCompany(company.id);
    }
}
