import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { StaffEntity } from './staff.entity';

@EntityRepository(StaffEntity)
export class StaffRepository extends Repository<StaffEntity> {}
