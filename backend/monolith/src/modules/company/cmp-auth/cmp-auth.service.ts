import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CompanyNotFoundException } from '../../../core/exceptions/company-not-found.exception';
import { UtilsService } from '../../../core/providers/utils.service';
import { ConfigService } from '../../../shared/services/config.service';
import type { CompanyEntity } from '../../general/company/company.entity';
import type { CompanyDto } from '../../general/company/dto/CompanyDto';
import { CmpCompanyService } from '../cmp-company/cmp-company.service';
import type { CompanyLoginDto } from './dto/CompanyLoginDto';
import { TokenPayloadDto } from './dto/TokenPayloadDto';

@Injectable()
export class CmpAuthService {
    constructor(
        public readonly jwtService: JwtService,
        public readonly configService: ConfigService,
        public readonly cmpCompanyService: CmpCompanyService,
    ) {}

    async createToken(
        company: CompanyEntity | CompanyDto,
    ): Promise<TokenPayloadDto> {
        return new TokenPayloadDto({
            expiresIn: this.configService.getNumber('JWT_EXPIRATION_TIME'),
            accessToken: await this.jwtService.signAsync({ id: company.id }),
        });
    }

    async validateCompany(
        companyLoginDto: CompanyLoginDto,
    ): Promise<CompanyEntity> {
        const company = await this.cmpCompanyService.findOne({
            email: companyLoginDto.email,
        });
        const isPasswordValid = await UtilsService.validateHash(
            companyLoginDto.password,
            company && company.password,
        );
        if (!company || !isPasswordValid) {
            throw new CompanyNotFoundException();
        }
        return company;
    }
}
