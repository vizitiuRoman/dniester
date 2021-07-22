import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthCompany } from '../../decorators/auth-company.decorator';
import { CompanyAuth } from '../../decorators/http.decorators';
import { CompanyEntity } from '../company/company.entity';
import { ServiceDto } from './dto/ServiceDto';
import { ServiceService } from './service.service';

@Controller('services')
@ApiTags('services')
export class ServiceController {
    constructor(private serviceService: ServiceService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get services list',
        type: ServiceDto,
    })
    getCompanies(): Promise<ServiceDto[]> {
        return this.serviceService.getServices();
    }

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
