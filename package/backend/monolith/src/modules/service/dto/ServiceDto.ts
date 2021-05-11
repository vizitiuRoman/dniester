import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import type { ServiceEntity } from '../service.entity';

export class ServiceDto extends AbstractDto {
    @ApiPropertyOptional()
    name: string;

    @ApiPropertyOptional()
    userId: string;

    constructor(service: ServiceEntity) {
        super(service);
        this.name = service.name;
        this.userId = service.userId;
    }
}
