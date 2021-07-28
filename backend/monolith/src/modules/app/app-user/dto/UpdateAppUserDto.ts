import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../../common/dto/AbstractDto';
import type { UserEntity } from '../../../general/user/user.entity';

export class UpdateAppUserDto extends AbstractDto {
    @ApiPropertyOptional()
    name: string;

    @ApiPropertyOptional()
    lastName: string;

    @ApiPropertyOptional()
    email: string;

    @ApiPropertyOptional()
    password: string;

    constructor(service: UserEntity) {
        super(service);
        this.name = service.name;
        this.lastName = service.lastName;
        this.email = service.email;
    }
}
