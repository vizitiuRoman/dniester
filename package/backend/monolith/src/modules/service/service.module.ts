import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ServiceController } from './service.controller';
import { ServiceRepository } from './service.repository';
import { ServiceService } from './service.service';

@Module({
    imports: [TypeOrmModule.forFeature([ServiceRepository])],
    controllers: [ServiceController],
    exports: [ServiceService],
    providers: [ServiceService],
})
export class ServiceModule {}
