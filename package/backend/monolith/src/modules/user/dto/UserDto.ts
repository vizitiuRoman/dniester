import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import type { UserEntity } from '../user.entity';

export class UserDto extends AbstractDto {
    @ApiPropertyOptional()
    fullName: string;

    @ApiPropertyOptional()
    email: string;

    constructor(user: UserEntity) {
        super(user);
        this.email = user.email;
        this.fullName = user.fullName;
    }
}
