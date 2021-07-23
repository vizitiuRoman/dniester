import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BranchRepository } from '../../general/branch/branch.repository';
import { AppBranchController } from './app-branch.controller';
import { AppBranchService } from './app-branch.service';

@Module({
    imports: [TypeOrmModule.forFeature([BranchRepository])],
    controllers: [AppBranchController],
    exports: [AppBranchService],
    providers: [AppBranchService],
})
export class AppBranchModule {}
