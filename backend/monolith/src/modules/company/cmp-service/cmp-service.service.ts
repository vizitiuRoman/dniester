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

    public async getService(id: string): Promise<ServiceDto> {
        try {
            return (
                await this.serviceRepository.findOne({
                    where: {
                        id,
                    },
                })
            ).toDto();
        } catch (e) {
            Logger.error('[getService] error', e, CmpServiceService.name);
        }
    }

    public async deleteService(id: string): Promise<ServiceDto> {
        try {
            const service = await this.serviceRepository.findOne({
                where: {
                    id,
                },
            });
            if (!service) {
                throw new NotFoundException(`not found service: id ${id}`);
            }
            return (await this.serviceRepository.remove(service)).toDto();
        } catch (e) {
            Logger.error('[deleteService] error', e, CmpServiceService.name);
        }
    }
}
