import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserRepository } from '../../general/user/user.repository';
import { AppUserController } from './app-user.controller';
import { AppUserService } from './app-user.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository])],
    controllers: [AppUserController],
    exports: [AppUserService],
    providers: [AppUserService],
})
export class AppUserModule {}
