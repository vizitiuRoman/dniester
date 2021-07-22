import { Injectable } from '@nestjs/common';
import type { FindConditions } from 'typeorm';

import type { CompanyEntity } from '../../company/company.entity';
import { CompanyRepository } from '../../company/company.repository';

@Injectable()
export class AdminCompanyService {
    constructor(public readonly companyRepository: CompanyRepository) {}

    public findOne(
        findData: FindConditions<CompanyEntity>,
    ): Promise<CompanyEntity> {
        return this.companyRepository.findOne(findData);
    }

    public async getCompany(companyId: string) {
        const queryBuilder = this.companyRepository.createQueryBuilder(
            'company',
        );

        queryBuilder.where('admin-company.id = :companyId', { companyId });

        const companyEntity = await queryBuilder.getOne();

        return companyEntity.toDto();
    }
}
