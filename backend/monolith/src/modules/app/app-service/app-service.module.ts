import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ServiceRepository } from '../../general/service/service.repository';
import { AppUserModule } from '../app-user/app-user.module';
import { AppServiceController } from './app-service.controller';
import { AppServiceService } from './app-service.service';

@Module({
    imports: [TypeOrmModule.forFeature([ServiceRepository]), AppUserModule],
    controllers: [AppServiceController],
    exports: [AppServiceService],
    providers: [AppServiceService],
})
export class AppServiceModule {}
