import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../../common/dto/AbstractDto';
import type { ReviewEntity } from '../../../general/review/review.entity';

export class UpdateAppReviewDto extends AbstractDto {
    @ApiPropertyOptional()
    name: string;

    constructor(service: ReviewEntity) {
        super(service);
        this.name = service.name;
    }
}
