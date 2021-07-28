import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserNotFoundException } from '../../../core/exceptions/user-not-found.exception';
import { UtilsService } from '../../../core/providers/utils.service';
import { ConfigService } from '../../../shared/services/config.service';
import type { UserDto } from '../../general/user/dto/UserDto';
import type { UserEntity } from '../../general/user/user.entity';
import { AppUserService } from '../app-user/app-user.service';
import { TokenPayloadDto } from './dto/TokenPayloadDto';
import type { UserLoginDto } from './dto/UserLoginDto';

@Injectable()
export class AppUserAuthService {
    constructor(
        public readonly jwtService: JwtService,
        public readonly configService: ConfigService,
        public readonly appUserService: AppUserService,
    ) {}

    async createToken(user: UserEntity | UserDto): Promise<TokenPayloadDto> {
        return new TokenPayloadDto({
            expiresIn: this.configService.getNumber('JWT_EXPIRATION_TIME'),
            accessToken: await this.jwtService.signAsync({ id: user.id }),
        });
    }

    async validateUser(userLoginDto: UserLoginDto): Promise<UserEntity> {
        const user = await this.appUserService.findOne({
            email: userLoginDto.email,
        });
        const isPasswordValid = await UtilsService.validateHash(
            userLoginDto.password,
            user && user.password,
        );
        if (!user || !isPasswordValid) {
            throw new UserNotFoundException();
        }
        return user;
    }
}
