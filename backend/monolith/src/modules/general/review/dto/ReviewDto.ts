import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../../common/dto/AbstractDto';
import type { ReviewEntity } from '../review.entity';

export class ReviewDto extends AbstractDto {
    @ApiPropertyOptional()
    name: string;

    constructor(service: ReviewEntity) {
        super(service);
        this.name = service.name;
    }
}
