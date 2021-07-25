import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import type { FindConditions } from 'typeorm';
import type { FindManyOptions } from 'typeorm/find-options/FindManyOptions';

import type { CompanyEntity } from '../../general/company/company.entity';
import { CompanyRepository } from '../../general/company/company.repository';
import type { CompanyDto } from '../../general/company/dto/CompanyDto';
import type { CreateCmpCompanyDto } from './dto/CreateCmpCompanyDto';
import type { UpdateCmpCompanyDto } from './dto/UpdateCmpCompanyDto';

@Injectable()
export class CmpCompanyService {
    constructor(public readonly companyRepository: CompanyRepository) {}

    public findOne(
        findData: FindConditions<CompanyEntity>,
    ): Promise<CompanyEntity> {
        return this.companyRepository.findOne(findData);
    }

    public async createCompany(
        company: CreateCmpCompanyDto,
    ): Promise<CompanyDto> {
        try {
            const createdCompany = this.companyRepository.create(company);
            return (await this.companyRepository.save(createdCompany)).toDto();
        } catch (e) {
            Logger.error('[createCompany] error', e, CmpCompanyService.name);
        }
    }

    public async updateCompany(
        company: UpdateCmpCompanyDto,
    ): Promise<CompanyDto> {
        try {
            return (await this.companyRepository.save(company)).toDto();
        } catch (e) {
            Logger.error('[updateCompany] error', e, CmpCompanyService.name);
        }
    }

    public async getCompanies(
        id: string,
        options?: FindManyOptions<CompanyEntity>,
    ): Promise<CompanyDto[]> {
        try {
            return (
                await this.companyRepository.find({
                    ...options,
                    where: {
                        id,
                    },
                })
            ).toDtos();
        } catch (e) {
            Logger.error('[getCompanies] error', e, CmpCompanyService.name);
        }
    }

    public async getCompany(id: string): Promise<CompanyDto> {
        try {
            return (
                await this.companyRepository.findOne({
                    where: {
                        id,
                    },
                })
            ).toDto();
        } catch (e) {
            Logger.error('[getCompany] error', e, CmpCompanyService.name);
        }
    }

    public async deleteCompany(id: string): Promise<CompanyDto> {
        try {
            const company = await this.companyRepository.findOne({
                where: {
                    id,
                },
            });
            if (!company) {
                throw new NotFoundException(`not found company: id ${id}`);
            }
            return (await this.companyRepository.remove(company)).toDto();
        } catch (e) {
            Logger.error('[deleteCompany] error', e, CmpCompanyService.name);
        }
    }
}
