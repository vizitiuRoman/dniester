import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { StaffDto } from './dto/StaffDto';
import { StaffService } from './staff.service';

@Controller('staffs')
@ApiTags('staffs')
export class StaffController {
    constructor(private staffService: StaffService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get staffs list',
        type: StaffDto,
    })
    getStaffs(): Promise<StaffDto[]> {
        return this.staffService.getStaffs();
    }
}
