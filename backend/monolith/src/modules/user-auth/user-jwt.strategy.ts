import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { ConfigService } from '../../shared/services/config.service';
import { UserService } from '../user/user.service';

@Injectable()
export class UserJwtStrategy extends PassportStrategy(Strategy, 'user_jwt') {
    constructor(
        public readonly configService: ConfigService,
        public readonly userService: UserService,
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
        const user = await this.userService.findOne(userId);

        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
