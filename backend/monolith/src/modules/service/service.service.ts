import { Injectable } from '@nestjs/common';

import { AwsS3Service } from '../../shared/services/aws-s3.service';
import { ValidatorService } from '../../shared/services/validator.service';
import type { ServiceDto } from './dto/ServiceDto';
import { ServiceRepository } from './service.repository';

@Injectable()
export class ServiceService {
    constructor(
        private readonly serviceRepository: ServiceRepository,
        private readonly validatorService: ValidatorService,
        private readonly awsS3Service: AwsS3Service,
    ) {}

    public async getServices(): Promise<ServiceDto[]> {
        const services = await this.serviceRepository.find();
        return services.toDtos();
    }

    public async getCompanyServices(companyId: string): Promise<ServiceDto[]> {
        const services = await this.serviceRepository.find({
            where: {
                companyId,
            },
        });

        return services.toDtos();
    }
}
