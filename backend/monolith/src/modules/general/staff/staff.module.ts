import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StaffRepository } from './staff.repository';

@Module({
    imports: [TypeOrmModule.forFeature([StaffRepository])],
})
export class StaffModule {}
