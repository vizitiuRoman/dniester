import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
    ApiBearerAuth,
    ApiConsumes,
    ApiOkResponse,
    ApiTags,
} from '@nestjs/swagger';

import { AuthCompany } from '../../decorators/auth-company.decorator';
import { ApiFile } from '../../decorators/swagger.schema';
import { CompanyAuthGuard } from '../../guards/auth.guard';
import { AuthCompanyInterceptor } from '../../interceptors/auth-company-interceptor.service';
import { CompanyEntity } from '../company/company.entity';
import { CompanyService } from '../company/company.service';
import { CompanyDto } from '../company/dto/CompanyDto';
import { CompanyAuthService } from './company-auth.service';
import { CompanyLoginDto } from './dto/CompanyLoginDto';
import { CompanyRegisterDto } from './dto/CompanyRegisterDto';
import { LoginPayloadDto } from './dto/LoginPayloadDto';

@Controller('auth/company')
@ApiTags('auth/company')
export class CompanyAuthController {
    constructor(
        public readonly companyService: CompanyService,
        public readonly authService: CompanyAuthService,
    ) {}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: LoginPayloadDto,
        description: 'Company info with access token',
    })
    async companyLogin(
        @Body() companyLoginDto: CompanyLoginDto,
    ): Promise<LoginPayloadDto> {
        const companyEntity = await this.authService.validateCompany(
            companyLoginDto,
        );

        const token = await this.authService.createToken(companyEntity);
        return new LoginPayloadDto(companyEntity.toDto(), token);
    }

    @Post('register')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ type: CompanyDto, description: 'Successfully Registered' })
    @ApiConsumes('multipart/form-data')
    @ApiFile([{ name: 'avatar' }])
    @UseInterceptors(FileInterceptor('avatar'))
    async companyRegister(
        @Body() companyRegisterDto: CompanyRegisterDto,
    ): Promise<LoginPayloadDto> {
        const createdCompany = await this.companyService.createCompany(
            companyRegisterDto,
        );

        const token = await this.authService.createToken(createdCompany);
        return new LoginPayloadDto(createdCompany.toDto(), token);
    }

    @Get('me')
    @HttpCode(HttpStatus.OK)
    @UseGuards(CompanyAuthGuard)
    @UseInterceptors(AuthCompanyInterceptor)
    @ApiBearerAuth()
    @ApiOkResponse({ type: CompanyDto, description: 'current company info' })
    getCurrentCompany(@AuthCompany() company: CompanyEntity) {
        return company.toDto();
    }
}
