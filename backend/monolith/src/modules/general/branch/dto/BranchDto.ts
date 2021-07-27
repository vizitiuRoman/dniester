import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../../common/dto/AbstractDto';
import type { ServiceDto } from '../../service/dto/ServiceDto';
import type { BranchEntity } from '../branch.entity';

export class BranchDto extends AbstractDto {
    @ApiPropertyOptional()
    name: string;

    @ApiPropertyOptional()
    services: ServiceDto[];

    constructor(service: BranchEntity) {
        super(service);
        this.name = service.name;

        if (service.services?.length) {
            this.services = service.services.toDtos();
        }
    }
}
