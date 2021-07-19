import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StaffController } from './staff.controller';
import { StaffRepository } from './staff.repository';
import { StaffService } from './staff.service';

@Module({
    imports: [TypeOrmModule.forFeature([StaffRepository])],
    controllers: [StaffController],
    exports: [StaffService],
    providers: [StaffService],
})
export class StaffModule {}
