import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UUIDParam } from '../../decorators/http.decorators';

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
    getUsers(): Promise<ServiceDto[]> {
        return this.serviceService.getServices();
    }

    @Get('user/:id')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get services list',
        type: ServiceDto,
    })
    getServicesByUser(@UUIDParam('id') userId: string): Promise<ServiceDto[]> {
        return this.serviceService.getServicesByUser(userId);
    }
}
