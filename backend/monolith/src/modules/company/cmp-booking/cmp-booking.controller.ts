import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Put,
} from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthCompany } from '../../../decorators/auth-company.decorator';
import { CompanyAuth, UUIDParam } from '../../../decorators/http.decorators';
import { BookingDto } from '../../general/booking/dto/BookingDto';
import { CompanyEntity } from '../../general/company/company.entity';
import { CmpBookingService } from './cmp-booking.service';
import { CreateCmpBookingDto } from './dto/CreateCmpBookingDto';
import { UpdateCmpBookingDto } from './dto/UpdateCmpBookingDto';

@Controller('company/bookings')
@ApiTags('company/bookings')
export class CmpBookingController {
    constructor(private cmpBookingService: CmpBookingService) {}

    @Post()
    @CompanyAuth()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: BookingDto,
        description: 'Successfully created booking',
    })
    createBooking(@Body() body: CreateCmpBookingDto): Promise<BookingDto> {
        return this.cmpBookingService.createBooking(body);
    }

    @Put()
    @CompanyAuth()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: BookingDto,
        description: 'Successfully updated booking',
    })
    updateBooking(@Body() body: UpdateCmpBookingDto): Promise<BookingDto> {
        return this.cmpBookingService.updateBooking(body);
    }

    @Get()
    @CompanyAuth()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get bookings list',
        type: BookingDto,
    })
    getCompanyBookings(
        @AuthCompany() company: CompanyEntity,
    ): Promise<BookingDto[]> {
        return this.cmpBookingService.getCompanyBookings(company.id, {
            relations: ['staffs', 'branch', 'bookings'],
        });
    }

    @Get(':id')
    @CompanyAuth()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get booking',
        type: BookingDto,
    })
    getCompanyBooking(
        @AuthCompany() company: CompanyEntity,
        @UUIDParam('id') bookingId: string,
    ): Promise<BookingDto> {
        return this.cmpBookingService.getCompanyBooking(bookingId, company.id);
    }

    @Delete(':id')
    @CompanyAuth()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Delete booking',
        type: BookingDto,
    })
    deleteCompanyBooking(
        @AuthCompany() company: CompanyEntity,
        @UUIDParam('id') bookingId: string,
    ): Promise<BookingDto> {
        return this.cmpBookingService.getCompanyBooking(bookingId, company.id);
    }
}
