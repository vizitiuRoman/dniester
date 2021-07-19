import { Injectable } from '@nestjs/common';
import type { FindConditions } from 'typeorm';

import type { PageDto } from '../../common/dto/PageDto';
import { AwsS3Service } from '../../shared/services/aws-s3.service';
import { ValidatorService } from '../../shared/services/validator.service';
import type { CompanyRegisterDto } from '../auth/dto/CompanyRegisterDto';
import type { CompanyEntity } from './company.entity';
import { CompanyRepository } from './company.repository';
import type { CompaniesPageOptionsDto } from './dto/CompaniesPageOptionsDto';
import type { CompanyDto } from './dto/CompanyDto';

@Injectable()
export class CompanyService {
    constructor(
        public readonly companyRepository: CompanyRepository,
        public readonly validatorService: ValidatorService,
        public readonly awsS3Service: AwsS3Service,
    ) {}

    /**
     * Find single company
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
            queryBuilder.orWhere('company.email = :email', {
                email: options.email,
            });
        }
        if (options.companyname) {
            queryBuilder.orWhere('company.companyname = :companyname', {
                companyname: options.companyname,
            });
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

        queryBuilder.where('company.id = :companyId', { companyId });

        const companyEntity = await queryBuilder.getOne();

        return companyEntity.toDto();
    }
}
