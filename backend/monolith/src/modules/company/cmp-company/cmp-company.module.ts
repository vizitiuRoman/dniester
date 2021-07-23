import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CompanyRepository } from '../../general/company/company.repository';
import { CmpCompanyController } from './cmp-company.controller';
import { CmpCompanyService } from './cmp-company.service';

@Module({
    imports: [TypeOrmModule.forFeature([CompanyRepository])],
    controllers: [CmpCompanyController],
    exports: [CmpCompanyService],
    providers: [CmpCompanyService],
})
export class CmpCompanyModule {}
