import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CompanyRepository } from './company.repository';

@Module({
    imports: [TypeOrmModule.forFeature([CompanyRepository])],
})
export class CompanyModule {}
