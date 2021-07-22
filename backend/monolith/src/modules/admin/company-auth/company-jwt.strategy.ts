import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { ConfigService } from '../../../shared/services/config.service';
import { CompanyService } from '../../company/company.service';

@Injectable()
export class CompanyJwtStrategy extends PassportStrategy(
    Strategy,
    'company_jwt',
) {
    constructor(
        public readonly configService: ConfigService,
        public readonly companyService: CompanyService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET_KEY'),
        });
    }

    async validate({ iat, exp, id: companyId }) {
        const timeDiff = exp - iat;
        if (timeDiff <= 0) {
            throw new UnauthorizedException();
        }
        const company = await this.companyService.findOne(companyId);

        if (!company) {
            throw new UnauthorizedException();
        }
        return company;
    }
}
