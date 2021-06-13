import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import type { CompanyEntity } from '../company.entity';

export class CompanyDto extends AbstractDto {
    @ApiPropertyOptional()
    fullName: string;

    @ApiPropertyOptional()
    email: string;

    constructor(company: CompanyEntity) {
        super(company);
        this.email = company.email;
        this.fullName = company.fullName;
    }
}
