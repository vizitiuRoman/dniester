import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { ServiceEntity } from './service.entity';

@EntityRepository(ServiceEntity)
export class ServiceRepository extends Repository<ServiceEntity> {}
