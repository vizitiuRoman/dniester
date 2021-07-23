import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CompanyRepository } from '../../general/company/company.repository';
import { AppCompanyController } from './app-company.controller';
import { AppCompanyService } from './app-company.service';

@Module({
    imports: [TypeOrmModule.forFeature([CompanyRepository])],
    controllers: [AppCompanyController],
    exports: [AppCompanyService],
    providers: [AppCompanyService],
})
export class AppCompanyModule {}
