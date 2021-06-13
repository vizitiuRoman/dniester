import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import type { BookingEntity } from '../booking.entity';

export class BookingDto extends AbstractDto {
    @ApiPropertyOptional()
    serviceId: string;

    constructor(booking: BookingEntity) {
        super(booking);
        this.serviceId = booking.serviceId;
    }
}
