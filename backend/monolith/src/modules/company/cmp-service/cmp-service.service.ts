import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import type { FindManyOptions } from 'typeorm/find-options/FindManyOptions';

import type { ServiceDto } from '../../general/service/dto/ServiceDto';
import type { ServiceEntity } from '../../general/service/service.entity';
import { ServiceRepository } from '../../general/service/service.repository';
import type { CreateCmpServiceDto } from './dto/CreateCmpServiceDto';
import type { UpdateCmpServiceDto } from './dto/UpdateCmpServiceDto';

@Injectable()
export class CmpServiceService {
    constructor(private readonly serviceRepository: ServiceRepository) {}

    public async createService(
        service: CreateCmpServiceDto,
    ): Promise<ServiceDto> {
        try {
            const createdService = this.serviceRepository.create(service);
            return (await this.serviceRepository.save(createdService)).toDto();
        } catch (e) {
            Logger.error('[createService] error', e, CmpServiceService.name);
        }
    }

    public async updateService(
        service: UpdateCmpServiceDto,
    ): Promise<ServiceDto> {
        try {
            return (await this.serviceRepository.save(service)).toDto();
        } catch (e) {
            Logger.error('[updateService] error', e, CmpServiceService.name);
        }
    }

    public async getCompanyServices(
        companyId: string,
        options?: FindManyOptions<ServiceEntity>,
    ): Promise<ServiceDto[]> {
        try {
            return (
                await this.serviceRepository.find({
                    ...options,
                    where: {
                        companyId,
                    },
                })
            ).toDtos();
        } catch (e) {
            Logger.error(
                '[getCompanyServices] error',
                e,
                CmpServiceService.name,
            );
        }
    }

    public async getCompanyService(
        id: string,
        companyId: string,
    ): Promise<ServiceDto> {
        try {
            return (
                await this.serviceRepository.findOne({
                    where: {
                        id,
                        companyId,
                    },
                })
            ).toDto();
        } catch (e) {
            Logger.error(
                '[getCompanyService] error',
                e,
                CmpServiceService.name,
            );
        }
    }

    public async deleteCompanyService(
        id: string,
        companyId: string,
    ): Promise<ServiceDto> {
        try {
            const service = await this.serviceRepository.findOne({
                where: {
                    id,
                    companyId,
                },
            });
            if (!service) {
                throw new NotFoundException(
                    `not found service: id ${id} companyId ${companyId}`,
                );
            }
            return (await this.serviceRepository.remove(service)).toDto();
        } catch (e) {
            Logger.error(
                '[deleteCompanyService] error',
                e,
                CmpServiceService.name,
            );
        }
    }
}
