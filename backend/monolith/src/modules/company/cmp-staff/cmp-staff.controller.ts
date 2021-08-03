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

import { AuthCompany } from '../../../core/decorators/auth-company.decorator';
import {
    CompanyAuth,
    UUIDParam,
} from '../../../core/decorators/http.decorators';
import { CompanyEntity } from '../../general/company/company.entity';
import { StaffDto } from '../../general/staff/dto/StaffDto';
import { CmpStaffService } from './cmp-staff.service';
import { CreateCmpStaffDto } from './dto/CreateCmpStaffDto';
import { UpdateCmpStaffDto } from './dto/UpdateCmpStaffDto';

@Controller('company/staffs')
@ApiTags('company/staffs')
export class CmpStaffController {
    constructor(private cmpStaffService: CmpStaffService) {}

    @Post()
    @CompanyAuth()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: StaffDto,
        description: 'Successfully created staff',
    })
    createStaff(
        @AuthCompany() company: CompanyEntity,
        @Body() body: CreateCmpStaffDto,
    ): Promise<StaffDto> {
        return this.cmpStaffService.createStaff({
            ...body,
            companyId: company.id,
        });
    }

    @Put()
    @CompanyAuth()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: StaffDto,
        description: 'Successfully updated staff',
    })
    updateStaff(@Body() body: UpdateCmpStaffDto): Promise<StaffDto> {
        return this.cmpStaffService.updateStaff(body);
    }

    @Get()
    @CompanyAuth()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get staffs list',
        type: StaffDto,
    })
    getCompanyStaffs(
        @AuthCompany() company: CompanyEntity,
    ): Promise<StaffDto[]> {
        return this.cmpStaffService.getCompanyStaffs(company.id);
    }

    @Get(':id')
    @CompanyAuth()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get staff',
        type: StaffDto,
    })
    getCompanyStaff(@UUIDParam('id') staffId: string): Promise<StaffDto> {
        return this.cmpStaffService.getStaff(staffId);
    }

    @Delete(':id')
    @CompanyAuth()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Delete staff',
        type: StaffDto,
    })
    deleteCompanyStaff(@UUIDParam('id') staffId: string): Promise<StaffDto> {
        return this.cmpStaffService.deleteStaff(staffId);
    }
}
