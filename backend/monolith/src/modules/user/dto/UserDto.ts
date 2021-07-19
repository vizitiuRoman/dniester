import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import type { BookingDto } from '../../booking/dto/BookingDto';
import { ServiceDto } from '../../service/dto/ServiceDto';
import type { UserEntity } from '../user.entity';

export class UserDto extends AbstractDto {
    @ApiPropertyOptional()
    name: string;

    @ApiPropertyOptional()
    lastName: string;

    @ApiPropertyOptional()
    email: string;

    @ApiPropertyOptional()
    bookings: BookingDto[];

    @ApiPropertyOptional()
    favoritesUserServices: ServiceDto[];

    constructor(service: UserEntity) {
        super(service);
        this.name = service.name;
        this.lastName = service.lastName;
        this.email = service.email;

        if (service.bookings) {
            this.bookings = service.bookings.toDtos();
        }
        if (service.favoritesUserServices) {
            this.favoritesUserServices = service.favoritesUserServices.toDtos();
        }
    }
}
