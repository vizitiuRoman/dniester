import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../../common/dto/AbstractDto';
import type { BookingEntity } from '../booking.entity';
import { UserDto } from '../../user/dto/UserDto';

export class BookingDto extends AbstractDto {
    @ApiPropertyOptional()
    user: UserDto;

    constructor(booking: BookingEntity) {
        super(booking);
        this.user = booking.user;
    }
}
