import { Injectable, Logger } from '@nestjs/common';
import type { FindManyOptions } from 'typeorm/find-options/FindManyOptions';

import type { ServiceDto } from '../../general/service/dto/ServiceDto';
import type { ServiceEntity } from '../../general/service/service.entity';
import { ServiceRepository } from '../../general/service/service.repository';
import type { UpdateAppServiceDto } from './dto/UpdateAppServiceDto';

@Injectable()
export class AppServiceService {
    constructor(private readonly serviceRepository: ServiceRepository) {}

    public async updateService(
        service: UpdateAppServiceDto,
    ): Promise<ServiceDto> {
        try {
            return (await this.serviceRepository.save(service)).toDto();
        } catch (e) {
            Logger.error('[updateService] error', e, AppServiceService.name);
        }
    }

    public async getServices(
        options?: FindManyOptions<ServiceEntity>,
    ): Promise<ServiceDto[]> {
        try {
            return (await this.serviceRepository.find(options)).toDtos();
        } catch (e) {
            Logger.error('[getServices] error', e, AppServiceService.name);
        }
    }

    public async getService(
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
            Logger.error('[getService] error', e, AppServiceService.name);
        }
    }
}
