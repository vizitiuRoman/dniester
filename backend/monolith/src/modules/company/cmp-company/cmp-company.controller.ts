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
import { CompanyDto } from '../../general/company/dto/CompanyDto';
import { CmpCompanyService } from './cmp-company.service';
import { CreateCmpCompanyDto } from './dto/CreateCmpCompanyDto';
import { UpdateCmpCompanyDto } from './dto/UpdateCmpCompanyDto';

@Controller('company/companies')
@ApiTags('company/companies')
export class CmpCompanyController {
    constructor(private companyService: CmpCompanyService) {}

    @Post()
    @CompanyAuth()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: CompanyDto,
        description: 'Successfully created company',
    })
    createCompany(@Body() body: CreateCmpCompanyDto): Promise<CompanyDto> {
        return this.companyService.createCompany(body);
    }

    @Put()
    @CompanyAuth()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: CompanyDto,
        description: 'Successfully updated company',
    })
    updateCompany(@Body() body: UpdateCmpCompanyDto): Promise<CompanyDto> {
        return this.companyService.updateCompany(body);
    }

    @Get()
    @CompanyAuth()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get companies list',
        type: CompanyDto,
    })
    getCompanies(@AuthCompany() company: CompanyEntity): Promise<CompanyDto[]> {
        return this.companyService.getCompanies(company.id);
    }

    @Get(':id')
    @CompanyAuth()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get company',
        type: CompanyDto,
    })
    getCompany(@UUIDParam('id') companyId: string): Promise<CompanyDto> {
        return this.companyService.getCompany(companyId);
    }

    @Delete(':id')
    @CompanyAuth()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Delete company',
        type: CompanyDto,
    })
    deleteCompany(@UUIDParam('id') companyId: string): Promise<CompanyDto> {
        return this.companyService.deleteCompany(companyId);
    }
}
