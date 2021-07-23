import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../../common/dto/AbstractDto';
import type { ServiceEntity } from '../../../general/service/service.entity';

export class UpdateCmpServiceDto extends AbstractDto {
    @ApiPropertyOptional()
    name: string;

    constructor(service: ServiceEntity) {
        super(service);
        this.name = service.name;
    }
}
