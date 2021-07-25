import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../../common/dto/AbstractDto';
import type { CompanyEntity } from '../../../general/company/company.entity';

export class UpdateCmpCompanyDto extends AbstractDto {
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
