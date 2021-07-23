import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StaffRepository } from '../../general/staff/staff.repository';
import { CmpStaffController } from './cmp-staff.controller';
import { CmpStaffService } from './cmp-staff.service';

@Module({
    imports: [TypeOrmModule.forFeature([StaffRepository])],
    controllers: [CmpStaffController],
    exports: [CmpStaffService],
    providers: [CmpStaffService],
})
export class CmpStaffModule {}
