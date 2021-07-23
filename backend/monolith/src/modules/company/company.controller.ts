import {
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Query,
    ValidationPipe,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { RoleType } from '../../common/constants/role-type';
import { PageDto } from '../../common/dto/PageDto';
import { AuthCompany } from '../../decorators/auth-company.decorator';
import { CompanyAuth, UUIDParam } from '../../decorators/http.decorators';
import { TranslationService } from '../../shared/services/translation.service';
import { CompanyEntity } from './company.entity';
import { CompanyService } from './company.service';
import { CompaniesPageOptionsDto } from './dto/CompaniesPageOptionsDto';
import { CompanyDto } from './dto/CompanyDto';

@Controller('companies')
@ApiTags('companies')
export class CompanyController {
    constructor(
        private companyService: CompanyService,
        private readonly translationService: TranslationService,
    ) {}

    @Get('admin')
    @CompanyAuth(RoleType.USER)
    @HttpCode(HttpStatus.OK)
    async admin(@AuthCompany() company: CompanyEntity): Promise<string> {
        const translation = await this.translationService.translate(
            'keywords.company-module',
            {
                lang: 'en',
            },
        );
        return `${translation} ${company.fullName}`;
    }

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
