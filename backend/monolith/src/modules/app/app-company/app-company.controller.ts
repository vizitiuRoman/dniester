import {
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Query,
    ValidationPipe,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { RoleType } from '../../../common/constants/role-type';
import { PageDto } from '../../../common/dto/PageDto';
import { AuthCompany } from '../../../decorators/auth-company.decorator';
import { CompanyAuth, UUIDParam } from '../../../decorators/http.decorators';
import { TranslationService } from '../../../shared/services/translation.service';
import { CompanyEntity } from '../../general/company/company.entity';
import { CompaniesPageOptionsDto } from '../../general/company/dto/CompaniesPageOptionsDto';
import { CompanyDto } from '../../general/company/dto/CompanyDto';
import { AppCompanyService } from './app-company.service';

@Controller('app/companies')
@ApiTags('app/companies')
export class AppCompanyController {
    constructor(
        private companyService: AppCompanyService,
        private readonly translationService: TranslationService,
    ) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get companies list',
        type: PageDto,
    })
    getCompanies(
        @Query(new ValidationPipe({ transform: true }))
        pageOptionsDto: CompaniesPageOptionsDto,
    ): Promise<PageDto<CompanyDto>> {
        return this.companyService.getCompanies(pageOptionsDto);
    }

    @Get(':id')
    @CompanyAuth(RoleType.USER)
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get companies list',
        type: CompanyDto,
    })
    getCompany(@UUIDParam('id') companyId: string): Promise<CompanyDto> {
        return this.companyService.getCompany(companyId);
    }
}
