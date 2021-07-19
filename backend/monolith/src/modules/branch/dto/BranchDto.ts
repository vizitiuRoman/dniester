import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import type { BranchEntity } from '../branch.entity';

export class BranchDto extends AbstractDto {
    @ApiPropertyOptional()
    name: string;

    constructor(service: BranchEntity) {
        super(service);
        this.name = service.name;
    }
}
