import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CompanyRepository } from '../../company/company.repository';
import { AdminCompanyController } from './admin-company.controller';
import { AdminCompanyService } from './admin-company.service';

@Module({
    imports: [TypeOrmModule.forFeature([CompanyRepository])],
    controllers: [AdminCompanyController],
    exports: [AdminCompanyService],
    providers: [AdminCompanyService],
})
export class AdminCompanyModule {}
