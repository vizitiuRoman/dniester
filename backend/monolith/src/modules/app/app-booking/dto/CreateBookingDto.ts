import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../../common/dto/AbstractDto';
import type { BookingEntity } from '../../../general/booking/booking.entity';

export class CreateBookingDto extends AbstractDto {
    @ApiPropertyOptional()
    companyId: string;

    @ApiPropertyOptional()
    staffId: string;

    @ApiPropertyOptional()
    userId: string;

    @ApiPropertyOptional()
    serviceId: string;

    constructor(booking: BookingEntity) {
        super(booking);
        this.companyId = booking.companyId;
        this.staffId = booking.staffId;
        this.userId = booking.userId;
        this.serviceId = booking.serviceId;
    }
}
