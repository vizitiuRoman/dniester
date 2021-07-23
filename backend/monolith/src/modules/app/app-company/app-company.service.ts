import { Injectable } from '@nestjs/common';
import type { FindConditions } from 'typeorm';

import type { PageDto } from '../../../common/dto/PageDto';
import { AwsS3Service } from '../../../shared/services/aws-s3.service';
import { ValidatorService } from '../../../shared/services/validator.service';
import type { CompanyRegisterDto } from '../../company/cmp-auth/dto/CompanyRegisterDto';
import type { CompanyEntity } from '../../general/company/company.entity';
import { CompanyRepository } from '../../general/company/company.repository';
import type { CompaniesPageOptionsDto } from '../../general/company/dto/CompaniesPageOptionsDto';
import type { CompanyDto } from '../../general/company/dto/CompanyDto';

@Injectable()
export class AppCompanyService {
    constructor(
        public readonly companyRepository: CompanyRepository,
        public readonly validatorService: ValidatorService,
        public readonly awsS3Service: AwsS3Service,
    ) {}

    /**
     * Find single app-company
     */
    public findOne(
        findData: FindConditions<CompanyEntity>,
    ): Promise<CompanyEntity> {
        return this.companyRepository.findOne(findData);
    }

    public async findByCompanyNameOrEmail(
        options: Partial<{ companyname: string; email: string }>,
    ): Promise<CompanyEntity | undefined> {
        const queryBuilder = this.companyRepository.createQueryBuilder(
            'company',
        );

        if (options.email) {
            queryBuilder.orWhere(
                'app-company-module-app-company.email = :email',
                {
                    email: options.email,
                },
            );
        }
        if (options.companyname) {
            queryBuilder.orWhere(
                'app-company-module-app-company.companyname = :companyname',
                {
                    companyname: options.companyname,
                },
            );
        }

        return queryBuilder.getOne();
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
}
