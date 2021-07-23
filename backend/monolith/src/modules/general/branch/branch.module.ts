import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BranchRepository } from './branch.repository';

@Module({
    imports: [TypeOrmModule.forFeature([BranchRepository])],
})
export class BranchModule {}
