import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CmpCompanyService } from './cmp-company.service';

@Controller('company/companies')
@ApiTags('company/companies')
export class CmpCompanyController {
    constructor(private companyService: CmpCompanyService) {}

    @Get('')
    @HttpCode(HttpStatus.OK)
    async admin(): Promise<string> {
        return 'OQWEOQWE';
    }
}
