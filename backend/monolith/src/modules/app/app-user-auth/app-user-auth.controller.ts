import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { AuthUser } from '../../../decorators/auth-user.decorator';
import { UserAuth } from '../../../decorators/http.decorators';
import { UserDto } from '../../general/user/dto/UserDto';
import { UserEntity } from '../../general/user/user.entity';
import { AppUserService } from '../app-user/app-user.service';
import { LoginPayloadDto } from './dto/LoginPayloadDto';
import { UserLoginDto } from './dto/UserLoginDto';
import { UserRegisterDto } from './dto/UserRegisterDto';
import { AppUserAuthService } from './app-user-auth.service';

@Controller('app/auth')
@ApiTags('app/auth')
export class AppUserAuthController {
    constructor(
        public readonly appUserService: AppUserService,
        public readonly authService: AppUserAuthService,
    ) {}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: LoginPayloadDto,
        description: 'User info with access token',
    })
    async userLogin(
        @Body() userLoginDto: UserLoginDto,
    ): Promise<LoginPayloadDto> {
        const userEntity = await this.authService.validateUser(userLoginDto);

        const token = await this.authService.createToken(userEntity);
        return new LoginPayloadDto(userEntity.toDto(), token);
    }

    @Post('register')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ type: UserDto, description: 'Successfully Registered' })
    async userRegister(
        @Body() userRegisterDto: UserRegisterDto,
    ): Promise<LoginPayloadDto> {
        const createdUser = await this.appUserService.createUser(
            userRegisterDto,
        );
        const token = await this.authService.createToken(createdUser);
        return new LoginPayloadDto(createdUser.toDto(), token);
    }

    @Get('me')
    @UserAuth()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ type: UserDto, description: 'current user info' })
    getCurrentUser(@AuthUser() user: UserEntity) {
        return user.toDto();
    }
}
