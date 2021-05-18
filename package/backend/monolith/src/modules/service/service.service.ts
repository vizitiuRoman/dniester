import { Injectable } from '@nestjs/common';

import { AwsS3Service } from '../../shared/services/aws-s3.service';
import { ValidatorService } from '../../shared/services/validator.service';
import type { ServiceDto } from './dto/ServiceDto';
import { ServiceRepository } from './service.repository';

@Injectable()
export class ServiceService {
    constructor(
        public readonly serviceRepository: ServiceRepository,
        public readonly validatorService: ValidatorService,
        public readonly awsS3Service: AwsS3Service,
    ) {}

    async getServices(): Promise<ServiceDto[]> {
        const services = await this.serviceRepository.find();
        return services.toDtos();
    }

    async getServicesByCompany(companyId: string): Promise<ServiceDto[]> {
        const services = await this.serviceRepository.find({
            where: {
                companyId,
            },
        });
        return services.toDtos();
    }
}
