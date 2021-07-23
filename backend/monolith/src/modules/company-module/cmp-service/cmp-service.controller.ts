import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthCompany } from '../../../decorators/auth-company.decorator';
import { CompanyAuth } from '../../../decorators/http.decorators';
import { CompanyEntity } from '../../company/company.entity';
import { ServiceDto } from '../../service/dto/ServiceDto';
import { CmpServiceService } from './cmp-service.service';

@Controller('company/services')
@ApiTags('company/services')
export class CmpServiceController {
    constructor(private serviceService: CmpServiceService) {}

    @Get('company')
    @CompanyAuth()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get services list',
        type: ServiceDto,
    })
    getCompanyServices(
        @AuthCompany() company: CompanyEntity,
    ): Promise<ServiceDto[]> {
        return this.serviceService.getCompanyServices(company.id);
    }
}
