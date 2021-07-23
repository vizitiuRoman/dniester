import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { UserDto } from '../../general/user/dto/UserDto';
import { AppUserService } from './app-user.service';

@Controller('app/users')
@ApiTags('app/users')
export class AppUserController {
    constructor(private userService: AppUserService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get users list',
        type: UserDto,
    })
    getUsers(): Promise<UserDto[]> {
        return this.userService.getUsers();
    }
}
