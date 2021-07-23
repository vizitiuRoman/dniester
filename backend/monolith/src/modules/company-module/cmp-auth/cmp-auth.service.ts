import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CompanyNotFoundException } from '../../../exceptions/company-not-found.exception';
import { UtilsService } from '../../../providers/utils.service';
import { ConfigService } from '../../../shared/services/config.service';
import type { CompanyEntity } from '../../company/company.entity';
import { CompanyService } from '../../company/company.service';
import type { CompanyDto } from '../../company/dto/CompanyDto';
import type { CompanyLoginDto } from './dto/CompanyLoginDto';
import { TokenPayloadDto } from './dto/TokenPayloadDto';

@Injectable()
export class CmpAuthService {
    constructor(
        public readonly jwtService: JwtService,
        public readonly configService: ConfigService,
        public readonly companyService: CompanyService,
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
        const company = await this.companyService.findOne({
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
