import { Injectable } from '@nestjs/common';

import type { ServiceDto } from '../../service/dto/ServiceDto';
import { ServiceRepository } from '../../service/service.repository';

@Injectable()
export class CmpServiceService {
    constructor(private readonly serviceRepository: ServiceRepository) {}

    public async getCompanyServices(companyId: string): Promise<ServiceDto[]> {
        const services = await this.serviceRepository.find({
            where: {
                companyId,
            },
        });

        return services.toDtos();
    }
}
