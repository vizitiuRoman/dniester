import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import type { StaffEntity } from '../staff.entity';

export class StaffDto extends AbstractDto {
    @ApiPropertyOptional()
    name: string;

    constructor(service: StaffEntity) {
        super(service);
        this.name = service.name;
    }
}
