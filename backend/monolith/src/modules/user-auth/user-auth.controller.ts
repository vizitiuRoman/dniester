import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { AuthUser } from '../../decorators/auth-user.decorator';
import { AuthUserInterceptor } from '../../interceptors/auth-user-interceptor.service';
import { UserDto } from '../user/dto/UserDto';
import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { LoginPayloadDto } from './dto/LoginPayloadDto';
import { UserLoginDto } from './dto/UserLoginDto';
import { UserRegisterDto } from './dto/UserRegisterDto';
import { UserAuthService } from './user-auth.service';

@Controller('user/auth')
@ApiTags('user/auth')
export class UserAuthController {
    constructor(
        public readonly userService: UserService,
        public readonly authService: UserAuthService,
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
        const createdUser = await this.userService.createUser(userRegisterDto);
        const token = await this.authService.createToken(createdUser);
        return new LoginPayloadDto(createdUser.toDto(), token);
    }

    @Get('me')
    @HttpCode(HttpStatus.OK)
    @UseInterceptors(AuthUserInterceptor)
    @ApiBearerAuth()
    @ApiOkResponse({ type: UserDto, description: 'current user info' })
    getCurrentUser(@AuthUser() user: UserEntity) {
        return user.toDto();
    }
}
