import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Put,
} from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthCompany } from '../../../decorators/auth-company.decorator';
import { CompanyAuth, UUIDParam } from '../../../decorators/http.decorators';
import { CompanyEntity } from '../../general/company/company.entity';
import { ServiceDto } from '../../general/service/dto/ServiceDto';
import { CmpServiceService } from './cmp-service.service';
import { CreateCmpServiceDto } from './dto/CreateCmpServiceDto';
import { UpdateCmpServiceDto } from './dto/UpdateCmpServiceDto';

@Controller('company/services')
@ApiTags('company/services')
export class CmpServiceController {
    constructor(private cmpServiceService: CmpServiceService) {}

    @Post()
    @CompanyAuth()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: ServiceDto,
        description: 'Successfully created service',
    })
    createService(@Body() body: CreateCmpServiceDto): Promise<ServiceDto> {
        return this.cmpServiceService.createService(body);
    }

    @Put()
    @CompanyAuth()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: ServiceDto,
        description: 'Successfully updated service',
    })
    updateService(@Body() body: UpdateCmpServiceDto): Promise<ServiceDto> {
        return this.cmpServiceService.updateService(body);
    }

    @Get()
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
        return this.cmpServiceService.getCompanyServices(company.id, {
            relations: ['staffs', 'branch', 'bookings'],
        });
    }

    @Get(':id')
    @CompanyAuth()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get service',
        type: ServiceDto,
    })
    getCompanyService(
        @AuthCompany() company: CompanyEntity,
        @UUIDParam('id') serviceId: string,
    ): Promise<ServiceDto> {
        return this.cmpServiceService.getCompanyService(serviceId, company.id);
    }

    @Delete(':id')
    @CompanyAuth()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Delete service',
        type: ServiceDto,
    })
    deleteCompanyService(
        @AuthCompany() company: CompanyEntity,
        @UUIDParam('id') serviceId: string,
    ): Promise<ServiceDto> {
        return this.cmpServiceService.getCompanyService(serviceId, company.id);
    }
}
