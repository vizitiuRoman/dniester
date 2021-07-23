import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ServiceRepository } from './service.repository';

@Module({
    imports: [TypeOrmModule.forFeature([ServiceRepository])],
})
export class ServiceModule {}
