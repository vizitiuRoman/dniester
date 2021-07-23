import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { ConfigService } from '../../../shared/services/config.service';
import { AppUserService } from '../app-user/app-user.service';

@Injectable()
export class AppUserJwtStrategy extends PassportStrategy(Strategy, 'user_jwt') {
    constructor(
        public readonly configService: ConfigService,
        public readonly appUserService: AppUserService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_USER_SECRET_KEY'),
        });
    }

    async validate({ iat, exp, id: userId }) {
        const timeDiff = exp - iat;
        if (timeDiff <= 0) {
            throw new UnauthorizedException();
        }
        const user = await this.appUserService.findOne(userId);

        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
