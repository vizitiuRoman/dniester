import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Put,
} from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

import { UserAuth, UUIDParam } from '../../../core/decorators/http.decorators';
import { UserDto } from '../../general/user/dto/UserDto';
import { AppUserService } from './app-user.service';
import { UpdateAppUserDto } from './dto/UpdateAppUserDto';

@Controller('app/users')
@ApiTags('app/users')
export class AppUserController {
    constructor(private appUserUser: AppUserService) {}

    @Get(':id')
    @UserAuth()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get users list',
        type: UserDto,
    })
    getUsers(@UUIDParam('id') id: string): Promise<UserDto> {
        return this.appUserUser.getUser(id);
    }

    @Put()
    @UserAuth()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: UserDto,
        description: 'Successfully updated user',
    })
    updateUser(@Body() body: UpdateAppUserDto): Promise<UserDto> {
        return this.appUserUser.updateUser(body);
    }

    @Delete(':id')
    @UserAuth()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: UserDto,
        description: 'Successfully deleted user',
    })
    deleteUser(@UUIDParam('id') id: string): Promise<UserDto> {
        return this.appUserUser.deleteUser(id);
    }
}
