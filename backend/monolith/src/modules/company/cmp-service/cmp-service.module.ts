import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ServiceRepository } from '../../general/service/service.repository';
import { CmpServiceController } from './cmp-service.controller';
import { CmpServiceService } from './cmp-service.service';

@Module({
    imports: [TypeOrmModule.forFeature([ServiceRepository])],
    controllers: [CmpServiceController],
    exports: [CmpServiceService],
    providers: [CmpServiceService],
})
export class CmpServiceModule {}
