import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../../common/dto/AbstractDto';
import type { BranchDto } from '../../branch/dto/BranchDto';
import type { ServiceEntity } from '../service.entity';

export class ServiceDto extends AbstractDto {
    @ApiPropertyOptional()
    name: string;

    @ApiPropertyOptional()
    branches: BranchDto[];

    constructor(service: ServiceEntity) {
        super(service);
        this.name = service.name;

        if (service.branches?.length) {
            this.branches = service.branches.toDtos();
        }
    }
}
