import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../../common/dto/AbstractDto';
import type { StaffEntity } from '../../../general/staff/staff.entity';

export class CreateCmpStaffDto extends AbstractDto {
    @ApiPropertyOptional()
    name: string;

    constructor(service: StaffEntity) {
        super(service);
        this.name = service.name;
    }
}
