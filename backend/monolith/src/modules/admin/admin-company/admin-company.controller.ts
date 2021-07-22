import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AdminCompanyService } from './admin-company.service';

@Controller('admin/companies')
@ApiTags('admin/companies')
export class AdminCompanyController {
    constructor(private companyService: AdminCompanyService) {}

    @Get('')
    @HttpCode(HttpStatus.OK)
    async admin(): Promise<string> {
        return 'OQWEOQWE';
    }
}
