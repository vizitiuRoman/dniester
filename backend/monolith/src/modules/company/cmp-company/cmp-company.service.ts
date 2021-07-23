import { Injectable } from '@nestjs/common';
import type { FindConditions } from 'typeorm';

import type { PageDto } from '../../../common/dto/PageDto';
import type { CompanyEntity } from '../../general/company/company.entity';
import { CompanyRepository } from '../../general/company/company.repository';
import type { CompaniesPageOptionsDto } from '../../general/company/dto/CompaniesPageOptionsDto';
import type { CompanyDto } from '../../general/company/dto/CompanyDto';
import type { CompanyRegisterDto } from '../cmp-auth/dto/CompanyRegisterDto';

@Injectable()
export class CmpCompanyService {
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

        queryBuilder.where('app-company-module-app-company.id = :companyId', {
            companyId,
        });

        const companyEntity = await queryBuilder.getOne();

        return companyEntity.toDto();
    }

    public async createCompany(
        companyRegisterDto: CompanyRegisterDto,
    ): Promise<CompanyEntity> {
        const company = this.companyRepository.create(companyRegisterDto);

        return this.companyRepository.save(company);
    }

    public async getCompanies(
        pageOptionsDto: CompaniesPageOptionsDto,
    ): Promise<PageDto<CompanyDto>> {
        const queryBuilder = this.companyRepository.createQueryBuilder(
            'company',
        );
        const { items, pageMetaDto } = await queryBuilder.paginate(
            pageOptionsDto,
        );

        return items.toPageDto(pageMetaDto);
    }
}
