import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BranchController } from './branch.controller';
import { BranchRepository } from './branch.repository';
import { BranchService } from './branch.service';

@Module({
    imports: [TypeOrmModule.forFeature([BranchRepository])],
    controllers: [BranchController],
    exports: [BranchService],
    providers: [BranchService],
})
export class BranchModule {}
